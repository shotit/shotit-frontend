"use strict";(self.webpackChunkshotit_frontend=self.webpackChunkshotit_frontend||[]).push([[205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(3117),o=(n(7294),n(3905));const i={sidebar_label:"Get Started",sidebar_position:1},a="Get Started",l={unversionedId:"GET_STARTED",id:"GET_STARTED",title:"Get Started",description:"Docker Compose is required, Please install it first.",source:"@site/docs/GET_STARTED.md",sourceDirName:".",slug:"/GET_STARTED",permalink:"/shotit-frontend/zh-Hans/docs/GET_STARTED",draft:!1,editUrl:"https://github.com/shotit/shotit-frontend/tree/main/docs/GET_STARTED.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get Started",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Further Documentation",permalink:"/shotit-frontend/zh-Hans/docs/FURTHER_DOCUMENTATION"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-started"},"Get Started"),(0,o.kt)("p",null,"Docker Compose is required, Please install it first."),(0,o.kt)("p",null,"Minimum workload: 2v16G, 4v32G preferred."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/shotit/shotit.git\ncd shotit\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy ",(0,o.kt)("inlineCode",{parentName:"li"},".env.example")," to ",(0,o.kt)("inlineCode",{parentName:"li"},".env")),(0,o.kt)("li",{parentName:"ul"},"Edit ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," as appropriate for your setup, as is for the first time."),(0,o.kt)("li",{parentName:"ul"},"Copy ",(0,o.kt)("inlineCode",{parentName:"li"},"milvus.yaml.example")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"milvus.yaml")),(0,o.kt)("li",{parentName:"ul"},"Edit ",(0,o.kt)("inlineCode",{parentName:"li"},"milvus.yaml")," as appropriate for your setup, as is for the first time.")),(0,o.kt)("p",null,"Create these necessary folders."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir -p volumes/shotit-hash\nmkdir -p volumes/shotit-incoming\nmkdir -p volumes/shotit-media\nmkdir -p volumes/mycores\nmkdir -p volumes/mysql\n")),(0,o.kt)("p",null,"Set the user and group information of ",(0,o.kt)("inlineCode",{parentName:"p"},"mycores")," to 8983, required by ",(0,o.kt)("inlineCode",{parentName:"p"},"liresolr"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo chown 8983:8983 volumes/mycores\n")),(0,o.kt)("p",null,"Then, up docker-compose services."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(Windows or Mac):\ndocker compose up -d\n(Linux):\ndocker-compose up -d\n")),(0,o.kt)("p",null,"Once the cluster is ready, you can add your video files to the incoming folder. Take Blender's Big Buck Bunny as an example, whose imdb tag is tt1254207, the path should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./volumes/shotit-incoming/tt1254207/Big_Buck_Bunny.mp4\n")),(0,o.kt)("p",null,"Restart ",(0,o.kt)("inlineCode",{parentName:"p"},"shotit-worker-watcher"),", in case it doesn't catch your file change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker restart shotit-worker-watcher\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"shotit-worker-watcher")," detects the existence of video files in the incoming folder, it would start uploading the videos to object-storage powered ",(0,o.kt)("inlineCode",{parentName:"p"},"shotit-media"),". After the upload, the videos would be eliminated, then ",(0,o.kt)("inlineCode",{parentName:"p"},"shotit-worker-hasher")," creates hash and ",(0,o.kt)("inlineCode",{parentName:"p"},"shotit-worker-loader")," loads the hash to vector database. Use the following command to see whether the index process has been completed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker logs -f -n 100 shotit-worker-loader\n")),(0,o.kt)("p",null,"When the index process completes, you will notice a ",(0,o.kt)("inlineCode",{parentName:"p"},"Loaded tt1254207/Big_Buck_Bunny.mp4")," log and you can search the videos by screenshot directly from the URL below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET http://127.0.0.1:3311/search?url=https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "frameCount": 0,\n    "error": "",\n    "result": [\n        {\n            "imdb": "tt1254207",\n            "filename": "Big_Buck_Bunny.mp4",\n            "episode": null,\n            "from": 473.75,\n            "to": 479.17,\n            "similarity": 0.9992420673370361,\n            "video": "http://172.17.0.1:3312/video/tt1254207/Big%20Buck%20Bunny.mp4?t=476.46000000000004&now=1682985600&token=kc64vEWHPMsvu54Fpl1BrR7wz8",\n            "image": "http://172.17.0.1:3312/image/tt1254207/Big%20Buck%20Bunny.mp4.jpg?t=476.46000000000004&now=1682985600&token=K0qxDPHhoviiexOyEvS9qHRim4"\n        }\n    ]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations!")," You have successfully deployed your ",(0,o.kt)("inlineCode",{parentName:"p"},"shotit")," search engine."),(0,o.kt)("p",null,"Notice: the first time of api call should be longer since shotit has to load hash completely into RAM first."))}d.isMDXComponent=!0}}]);