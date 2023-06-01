import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import { Skeleton } from 'antd';
import styles from './demo.module.css';
import defaultImg from '@site/static/img/default.png';
import SearchBar from '../components/SearchBar';

const { dropping } = styles;

const formatTime = (timeInSeconds: string) => {
  const sec_num = parseInt(timeInSeconds, 10);
  const hours = Math.floor(sec_num / 3600);
  const minutes = Math.floor((sec_num - hours * 3600) / 60);
  const seconds = sec_num - hours * 3600 - minutes * 60;
  return [
    hours < 10 ? `0${hours}` : hours,
    minutes < 10 ? `0${minutes}` : minutes,
    seconds < 10 ? `0${seconds}` : seconds,
  ].join(':');
};

const toBlob = function (src) {
  return new Promise((resolve) => {
    let img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = (e) => {
      let canvas = document.createElement('canvas');
      canvas.crossOrigin = 'anonymous';
      canvas.height = 720;
      if (e.target.nodeName === 'VIDEO') {
        canvas.width =
          (e.target.videoWidth / e.target.videoHeight) * canvas.height;
      } else {
        canvas.width = (e.target.width / e.target.height) * canvas.height;
      }
      canvas
        .getContext('2d')
        .drawImage(e.target, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        function (blob) {
          blobSearch(blob).then((res) => {
            resolve(res);
          });
        },
        'image/jpeg',
        0.8
      );
    };
    img.src = src;
  });
};

const blobSearch = async (imageBlob) => {
  const formData = new FormData();
  formData.append('image', imageBlob);
  const response = await fetch(
    `http://13.214.77.230:3311/search?cutBorders=&=`,
    {
      method: 'POST',
      body: formData,
    }
  );
  return await response.json();
};

const urlSearch = async (url: String) => {
  const response = await fetch(
    `http://13.214.77.230:3311/search?cutBorders=&url=${url}`
    // `http://127.0.0.1:3311/search?url=${url}`
  );
  return await response.json();
};

const timeCodeString = (from: string, to: string) => {
  return formatTime(String(from)) === formatTime(String(to))
    ? formatTime(String(from))
    : `${formatTime(String(from))} - ${formatTime(String(to))}`;
};

export default function DemoPage() {
  const [imageURL, setImageURL] = useState('');
  const [dropTargetText, setDropTargetText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Hide footer
    document.querySelector('footer').setAttribute('style', 'display: none;');

    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has('url')) {
      setImageURL(searchParams.get('url'));
    }

    const handlePasteAnywhere = (e) => {
      console.log('image paste');
      const items = e.clipboardData?.items;
      if (!items) return;
      const item = Array.from(items).find((e) => e.type.startsWith('image'));
      if (!item) return;
      setImageURL('');
      setImageURL(URL.createObjectURL(item.getAsFile()));
      e.preventDefault();
    };
    window.addEventListener('paste', handlePasteAnywhere, false);

    return () => {
      window.removeEventListener('paste', handlePasteAnywhere);
    };
  }, []);

  useEffect(() => {
    if (imageURL) {
      // paste or select from file system
      if (imageURL.startsWith('blob:')) {
        toBlob(imageURL).then((res: any) => {
          console.log('toBlob');
          const { result = [] } = res;
          setSearchResult(result);
        });
      } else {
        // select from modal
        urlSearch(imageURL).then((res) => {
          console.log('urlSearch');
          const { result = [] } = res;
          setSearchResult(result);
        });
      }
    }
  }, [imageURL]);

  const clickToIndex = useCallback((index: number) => {
    console.log('clickToIndex');
    setActiveIndex(index);
  }, []);

  const clearImageURL = useCallback(() => {
    console.log('clearImageURL');
    setImageURL('');
    setSearchResult([]);
    setActiveIndex(0);
  }, []);

  const handleURLpaste = useCallback((e) => {
    console.log('handleURLpaste');

    if (String(e).startsWith('http')) {
      setImageURL('');
      setImageURL(e);
      history.replaceState(
        null,
        null,
        `/shotit-frontend/demo?url=${encodeURIComponent(e)}`
      );
      return;
    }

    // URL
    if (!e.target.value.length) {
      setImageURL('');
      history.replaceState(null, null, '/shotit-frontend/demo');
      return;
    }
    if (e.target.parentNode.checkValidity()) {
      setImageURL('');
      setImageURL(e.target.value);
      history.replaceState(
        null,
        null,
        `/shotit-frontend/demo?url=${encodeURIComponent(e.target.value)}`
      );
    } else {
      e.target.parentNode.querySelector('input[type=submit]').click();
    }
  }, []);

  const handleFileSelect = useCallback((e) => {
    console.log('handleFileSelect');
    e.stopPropagation();
    e.preventDefault();
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!file || !file.type.match('image.*')) {
      return 'Error: File is not an image';
    }
    setImageURL('');
    setImageURL(URL.createObjectURL(file));
    return '';
  }, []);

  return (
    <Layout>
      <div className={styles.demoContainer}>
        <div className="row">
          <div className={`col col--12 ${styles.searchBarContainer}`}>
            <SearchBar
              imageURL={imageURL}
              clearImageURL={clearImageURL}
              handleURLpaste={handleURLpaste}
              handleFileSelect={handleFileSelect}
            ></SearchBar>
          </div>
        </div>
        <div className="row">
          <div className={`col col--6 ${styles.leftDemoSide}`}>
            {/* 
              setImageURL('') to ensure imageURL render immediately
             */}
            <img src={imageURL ? imageURL : defaultImg} alt="" />

            {/* Drop Area */}
            <div
              className={styles.dropEffect}
              onDrop={(e) => {
                const result = handleFileSelect(e);
                if (result) {
                  setDropTargetText(result);
                } else {
                  e.target.classList.remove(dropping);
                }
              }}
              onDragOver={(e) => {
                e.stopPropagation();
                e.preventDefault();
                e.dataTransfer.dropEffect = 'copy';
              }}
              onDragEnter={(e) => {
                e.target.classList.add(dropping);
                setDropTargetText('Drop image here');
              }}
              onDragLeave={(e) => {
                e.target.classList.remove(dropping);
              }}
            >
              {dropTargetText}
            </div>
          </div>
          {imageURL && searchResult.length == 0 && (
            <div
              className={`col col--6 ${styles.rightDemoSide} ${styles.searching}`}
            >
              <div>
                <div className={styles.loadingSvg}></div>
                <p className={styles.searchingText}>Searching...</p>
              </div>
            </div>
          )}
          {imageURL && searchResult.length > 0 && (
            <div
              className={`col col--6 ${styles.rightDemoSide} ${styles.resultArea}`}
            >
              {searchResult.map(
                (
                  {
                    // episode,
                    filename,
                    from,
                    to,
                    imdb,
                    similarity,
                    image,
                    video,
                  },
                  index
                ) => {
                  return (
                    <div
                      key={`${Date.now()}${similarity}`}
                      onClick={() => clickToIndex(index)}
                      className={`${styles.resultBox}`}
                      style={{
                        boxShadow: `${
                          index === activeIndex
                            ? '0 0 15px 5px rgba(13, 110, 253, 0.2)'
                            : '0 2px 12px 0 rgba(0,0,0,.2)'
                        }`,
                      }}
                    >
                      <div className={`${styles.filename}`}>{filename}</div>
                      <div className={`${styles.thumbnail}`}>
                        <img src="https://i.ibb.co/Fq1bTmX/elephant-s-dream.png"></img>
                        {/* <img src={image}></img> */}
                      </div>
                      <div className={`${styles.metainfo}`}>
                        {/* <div>{episode}</div> */}
                        <div>{timeCodeString(from, to)}</div>
                        <div>
                          Similarity: {`~${(similarity * 100).toFixed(2)}%`}
                        </div>
                        <div>
                          IMDB:&nbsp;
                          <a
                            href={`https://www.imdb.com/title/${imdb}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {imdb}
                            {/* open in new tab icon */}
                            <svg
                              width="13.5"
                              height="13.5"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              className="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"
                            >
                              <path
                                fill="currentColor"
                                d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                        {/* <div>{image}</div>
                        <div>{video}</div> */}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          )}
          {!imageURL && (
            <div
              className={`col col--6 ${styles.rightDemoSide} ${styles.skeleton}`}
            >
              <Skeleton paragraph={{ rows: 2 }} />
              <Skeleton.Avatar size={100} shape="square" />
              <Skeleton paragraph={{ rows: 4 }} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
