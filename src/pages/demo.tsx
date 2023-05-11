import React, { useState, useEffect, useContext, useCallback } from 'react';
import Layout from '@theme/Layout';
import styles from './demo.module.css';
import defaultImg from '@site/static/img/default.png';
import SearchingImageURLContext from '../contexts/SearchingImageURLContext';
import SearchBar from '../components/SearchBar';

export default function DemoPage({}) {
  const [imageURL, setImageURL] = useState('');
  const [searchingImageURL, setSearchingImageURL] = useContext(
    SearchingImageURLContext
  );

  useEffect(() => {
    // Hide footer
    document.querySelector('footer').setAttribute('style', 'display: none;');

    // window.addEventListener(
    //   'paste',
    //   (e) => {
    //     console.log('object');
    //     const items = e.clipboardData?.items;
    //     console.log({ items });
    //     if (!items) return;
    //     const item = Array.from(items).find((e) => e.type.startsWith('image'));
    //     if (!item) return;
    //     setSearchingImageURL(URL.createObjectURL(item.getAsFile()));
    //     e.preventDefault();
    //   },
    //   false
    // );
  }, []);

  const clearImageURL = useCallback(() => {
    setImageURL('');
  }, []);

  const handleURLpaste = useCallback((e) => {
    console.log('handleURLpaste');
    if (String(e).startsWith('http')) {
      setImageURL(e);
      setSearchingImageURL(
        `https://trace.moe/image-proxy?url=${encodeURIComponent(e)}`
      );
      history.replaceState(
        null,
        null,
        `/shotit-frontend/demo?url=${encodeURIComponent(e)}`
      );
      return;
    }
    e.preventDefault();
    // Image Data
    console.log(e);

    // URL text
    if (!e.target.value.length) {
      setImageURL('');
      history.replaceState(null, null, '/shotit-frontend/demo');
      return;
    }
    if (e.target.parentNode.checkValidity()) {
      setImageURL(e.target.value);
      setSearchingImageURL(
        `https://trace.moe/image-proxy?url=${encodeURIComponent(
          e.target.value
        )}`
      );
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
    setImageURL(URL.createObjectURL(file));
    setSearchingImageURL(URL.createObjectURL(file));
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
          <div
            className={`col col--6 ${styles.leftDemoSide}`}
            style={{ background: 'black', height: 'calc(100vh - 130px)' }}
          >
            <img src={imageURL ? imageURL : defaultImg} alt="" />
          </div>
          <div
            className="col col--6"
            style={{ background: 'aqua', height: 'calc(100vh - 130px)' }}
          >
            <p>This is a React page</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
