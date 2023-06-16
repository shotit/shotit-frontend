---
sidebar_label: 'Get Started'
sidebar_position: 1
---

# Get Started

Docker Compose is required, Please install it first.

Minimum workload: 2v16G, 4v32G preferred.

```
git clone https://github.com/shotit/shotit.git
cd shotit
```

- Copy `.env.example` to `.env`
- Edit `.env` as appropriate for your setup, as is for the first time.
- Copy `milvus.yaml.example` to `milvus.yaml`
- Edit `milvus.yaml` as appropriate for your setup, as is for the first time.

Create these necessary folders.

```
mkdir -p volumes/shotit-hash
mkdir -p volumes/shotit-incoming
mkdir -p volumes/shotit-media
mkdir -p volumes/mycores
mkdir -p volumes/mysql
```

Set the user and group information of `mycores` to 8983, required by `liresolr`.

```
sudo chown 8983:8983 volumes/mycores
```

Then, up docker-compose services.

```
(Windows or Mac):
docker compose up -d
(Linux):
docker-compose up -d
```

PS: The docker-compose.yml file fetches docker images from GitHub. If you prefer dockerhub, use the following commands instead.

```
(Windows or Mac):
docker compose -f docker-hub-compose.yml up -d
(Linux):
docker-compose -f docker-hub-compose.yml up -d
```

Once the cluster is ready, you can add your video files to the incoming folder. Take Blender's Big Buck Bunny as an example, whose imdb tag is tt1254207, the path should be:

```
./volumes/shotit-incoming/tt1254207/Big_Buck_Bunny.mp4
```

Restart `shotit-worker-watcher`, in case it doesn't catch the change of your files.

```
docker restart shotit-worker-watcher
```

When `shotit-worker-watcher` detects the existence of video files in the incoming folder, it would start uploading the videos to object-storage powered `shotit-media`. After the upload, the videos would be eliminated, then `shotit-worker-hasher` creates hash and `shotit-worker-loader` loads the hash to vector database. Use the following command to see whether the index process has been completed: 
```
docker logs -f -n 100 shotit-worker-loader
```

When the index process completes, you will notice a `Loaded tt1254207/Big_Buck_Bunny.mp4` log and you can search the videos by screenshot directly from the URL below.

```
GET http://127.0.0.1:3311/search?url=https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png
```

Response:

```
{
    "frameCount": 0,
    "error": "",
    "result": [
        {
            "imdb": "tt1254207",
            "filename": "Big_Buck_Bunny.mp4",
            "episode": null,
            "from": 473.75,
            "to": 479.17,
            "similarity": 0.9992420673370361,
            "video": "http://127.0.0.1:3312/video/tt1254207/Big%20Buck%20Bunny.mp4?t=476.46000000000004&now=1682985600&token=kc64vEWHPMsvu54Fpl1BrR7wz8",
            "image": "http://127.0.0.1:3312/image/tt1254207/Big%20Buck%20Bunny.mp4.jpg?t=476.46000000000004&now=1682985600&token=K0qxDPHhoviiexOyEvS9qHRim4"
        }
    ]
}
```

**Congratulations!** You have successfully deployed your `shotit` search engine.

Notice: the first time of api call should be longer since shotit has to load hash completely into RAM first.