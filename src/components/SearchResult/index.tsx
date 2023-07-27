import React from 'react';
import styles from './styles.module.css';

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
};

export default function SearchResult({
  // episode,
  filename,
  from,
  to,
  imdb,
  similarity,
  image,
  video,
  index,
  activeIndex,
  clickToIndex,
}) {
  return (
    <div
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
        {index === activeIndex && (
          <video
            src={video}
            poster={image}
            volume="0"
            muted
            autoPlay
            loop
            playsInline
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          ></video>
        )}
        {index !== activeIndex && <img src={image}></img>}
      </div>
      <div className={`${styles.metainfo}`}>
        {/* <div>{episode}</div> */}
        <div>{timeCodeString(from, to)}</div>
        <div>Similarity: {`~${(similarity * 100).toFixed(2)}%`}</div>
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
      </div>
    </div>
  );
}
