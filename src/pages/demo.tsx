import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import { Skeleton } from 'antd';
import styles from './demo.module.css';
import defaultImg from '@site/static/img/default.png';
import SearchBar from '../components/SearchBar';

const { dropping } = styles;

export default function DemoPage({}) {
  const [imageURL, setImageURL] = useState('');
  const [dropTargetText, setDropTargetText] = useState('');
  const [searchResult, setSearchResult] = useState([]);

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

  const clearImageURL = useCallback(() => {
    console.log('clearImageURL');
    setImageURL('');
    setSearchResult([]);
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
              className={`col col--6 ${styles.rightDemoSide} ${styles.result}`}
            >
              {searchResult.map(
                ({
                  episode,
                  filename,
                  from,
                  to,
                  imdb,
                  similarity,
                  image,
                  video,
                }) => {
                  return (
                    <div
                      key={`${Date.now()}${similarity}`}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        border: '1px solid #e1eaf1',
                        borderRadius: '1rem',
                        marginTop: '1rem',
                        marginBottom: '1rem',
                        boxShadow: '0 2px 12px 0 rgba(0,0,0,.2)',
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          margin: '1rem 1rem 0',
                          fontSize: '24px',
                          fontWeight: 'bold',
                          borderBottom: '1px solid',
                        }}
                      >
                        {filename}
                      </div>
                      <div
                        style={{
                          display: 'inline-block',
                          width: '320px',
                          height: '180px',
                          background: 'aqua',
                        }}
                      ></div>
                      <div
                        style={{
                          marginLeft: '1rem',
                          display: 'inline-block',
                          maxWidth: '300px',
                        }}
                      >
                        <div>{episode}</div>
                        <div></div>
                        <div>{from}</div>
                        <div>{to}</div>
                        <div>{imdb}</div>
                        <div>{similarity}</div>
                        <div>{image}</div>
                        <div>{video}</div>
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
