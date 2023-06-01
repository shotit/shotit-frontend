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

const timeCodeString = (from: string, to: string) => {
  return formatTime(String(from)) === formatTime(String(to))
    ? formatTime(String(from))
    : `${formatTime(String(from))} - ${formatTime(String(to))}`;
}

export default function DemoPage({ }) {
  const [imageURL, setImageURL] = useState('');
  const [dropTargetText, setDropTargetText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Hide footer
    document.querySelector('footer').setAttribute('style', 'display: none;');

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
    const fetchResult = async (url: String) => {
      const response = await fetch(
        `http://13.214.77.230:3311/search?url=${url}`
        // `http://127.0.0.1:3311/search?url=${url}`
      );
      return await response.json();
    };
    if (imageURL) {
      fetchResult(imageURL).then((res) => {
        console.log('fetchResult');
        const { result = [] } = res;
        setSearchResult(result);
      });
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
                ({
                  // episode,
                  filename,
                  from,
                  to,
                  imdb,
                  similarity,
                  image,
                  video,
                }, index) => {
                  return (
                    <div
                      key={`${Date.now()}${similarity}`}
                      onClick={() => clickToIndex(index
                      )}
                      className={`${styles.resultBox}`}
                      style={{
                        boxShadow: `${
                          index === activeIndex
                            ? '0 0 15px 5px rgba(13, 110, 253, 0.2)'
                            : '0 2px 12px 0 rgba(0,0,0,.2)'
                        }`,
                      }}
                    >
                      <div
                        className={`${styles.filename}`}
                      >
                        {filename}
                      </div>
                      <div
                        className={`${styles.thumbnail}`}
                      >
                        <img
                          src="https://i.ibb.co/Fq1bTmX/elephant-s-dream.png"
                        ></img>
                        {/* <img src={image}></img> */}
                      </div>
                      <div
                        className={`${styles.metainfo}`}
                      >
                        {/* <div>{episode}</div> */}
                        <div>{timeCodeString(from, to)}</div>
                        <div>
                          Similarity: {`~${(similarity * 100).toFixed(2)}%`}
                        </div>
                        <div>IMDB: {imdb}</div>
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
