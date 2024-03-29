import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import { Skeleton } from 'antd';
import styles from './demo.module.css';
import defaultImg from '@site/static/img/default.png';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

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

interface fetchWithTimeoutRequestInit extends RequestInit {
  timeout?: number;
}

async function fetchWithTimeout(
  resource,
  options: fetchWithTimeoutRequestInit = {}
) {
  const { timeout = 8000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}

const toBlob = function (src, clearImageURL, setShowError) {
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
          blobSearch(blob)
            .then((res) => {
              resolve(res);
            })
            .catch((e) => {
              console.log(e);
              setShowError(true);
              setTimeout(() => {
                setShowError(false);
                clearImageURL();
              }, 1000);
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
  try {
    const formData = new FormData();
    formData.append('image', imageBlob);
    const response = await fetchWithTimeout(
      `https://shotit-api.boost-art.net/search?cutBorders=&=`,
      {
        method: 'POST',
        body: formData,
      }
    );
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

const urlSearch = async (url: String) => {
  try {
    const response = await fetchWithTimeout(
      `https://shotit-api.boost-art.net/search?cutBorders=&url=${url}`
    );
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export default function DemoPage() {
  const [imageURL, setImageURL] = useState('');
  const [dropTargetText, setDropTargetText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showError, setShowError] = useState(false);

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
      clearImageURL();
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
        toBlob(imageURL, clearImageURL, setShowError).then((res: any) => {
          console.log('toBlob');
          const { result = [] } = res;
          setSearchResult(result);
        });
      } else {
        // select from modal
        urlSearch(imageURL)
          .then((res) => {
            console.log('urlSearch');
            const { result = [] } = res;
            setSearchResult(result);
          })
          .catch((e) => {
            console.log(e);
            setShowError(true);
            setTimeout(() => {
              setShowError(false);
              clearImageURL();
            }, 1000);
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
      clearImageURL();
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
      clearImageURL();
      history.replaceState(null, null, '/shotit-frontend/demo');
      return;
    }
    if (e.target.parentNode.checkValidity()) {
      clearImageURL();
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
    clearImageURL();
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
          {imageURL && searchResult.length === 0 && !showError && (
            <div
              className={`col col--6 ${styles.rightDemoSide} ${styles.searching}`}
            >
              <div>
                <div className={styles.loadingSvg}></div>
                <p className={styles.searchingText}>Searching...</p>
              </div>
            </div>
          )}
          {imageURL && searchResult.length === 0 && showError && (
            <div
              className={`col col--6 ${styles.rightDemoSide} ${styles.searching}`}
            >
              <div>
                <div className={styles.loadingSvg}></div>
                <p className={styles.searchingText}>Error!</p>
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
                    duration,
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
                    <SearchResult
                      key={`${Date.now()}${similarity}`}
                      filename={filename}
                      duration={duration}
                      from={from}
                      to={to}
                      imdb={imdb}
                      similarity={similarity}
                      image={image}
                      video={video}
                      index={index}
                      activeIndex={activeIndex}
                      clickToIndex={clickToIndex}
                    />
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
