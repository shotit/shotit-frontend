import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './styles.module.css';
const {
  searchBar,
  searchBarContent,
  formControls,
  formControlsFocus,
  sampleModalContainer,
  sampleModalContent,
  sampleModalText,
  sampleModalGroup,
  sampleModalItem,
  sampleModalItemLeft,
  sampleModalItemRight,
  imageUrlInput,
  closeSvgContainer,
  closeSvg,
  file,
} = styles;

const sampleScreenshots = [
  {
    name: "Elephant's Dream",
    thumbnail: 'https://i.ibb.co/B6CJKNk/thumbnail-elephant-s-dream.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/77caefa3-32e1-41cf-94b5-50eeab627a88',
  },
  {
    name: 'Big Buck Bunny',
    thumbnail: 'https://i.ibb.co/cvDk98K/thumbnail-big-buck-bunny.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/1f86b1b0-cbbf-4310-8192-cfb4bb2a1f7d',
  },
  {
    name: 'Sintel',
    thumbnail: 'https://i.ibb.co/L8GtKbQ/thumbnail-sintel.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/35dc7137-3573-4c5e-b60f-28b2a25c5636',
  },
  {
    name: 'Tears of Steel',
    thumbnail: 'https://i.ibb.co/KNZKffM/thumbnail-tears-of-steel.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/579d871f-669e-42cd-bb6a-148dc03a3a1e',
  },
  {
    name: 'Caminandes 2 gran dillama',
    thumbnail:
      'https://i.ibb.co/p3wxn1W/thumbnail-Caminandes-2-Gran-Dillama.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/162c3d49-bf16-4ee5-836e-64774bcbac7b',
  },
  {
    name: 'Cosmos Laundromat: First Cycle',
    thumbnail:
      'https://i.ibb.co/n3j4mRg/thumbnail-Cosmos-Laundromat-First-Cycle.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/8898eb3e-936c-4714-933d-f0bcaeedcca4',
  },
  {
    name: 'Glass Half',
    thumbnail: 'https://i.ibb.co/LxPnRJ5/thumbnail-glass-half.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/f9cfbd67-18a0-434c-b67f-5672bd6a9a8c',
  },
  {
    name: 'Agent 327',
    thumbnail: 'https://i.ibb.co/N2vhPYf/thumbnail-agent-327.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/8aecb218-3a61-4478-a191-db4d4a331d6e',
  },
  {
    name: 'Caminandes 3 Llamigos',
    thumbnail: 'https://i.ibb.co/r7xz8PB/thumbnail-Caminandes-3-Llamigos.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/43d82476-b519-46b5-8e10-722ae20c4184',
  },
  {
    name: 'The Daily Dweebs',
    thumbnail: 'https://i.ibb.co/9NWfqQ4/thumbnail-The-Daily-Dweebs.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/487c76b2-2d64-4971-b802-0b17169eaec0',
  },
  {
    name: 'HERO',
    thumbnail: 'https://i.ibb.co/vBbtPXz/thumbnail-HERO.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/38a068eb-9045-4962-a21b-74ffe934bc86',
  },
  {
    name: 'Spring',
    thumbnail: 'https://i.ibb.co/SxyPjNW/thumbnail-spring.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/0f356261-7ad7-422b-a45e-f925d4ed7be1',
  },
  {
    name: 'Coffee Run',
    thumbnail: 'https://i.ibb.co/stHLQKG/thumbnail-coffee-run.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/86a57880-fdba-4559-a085-16b6e8886ac9',
  },
  {
    name: 'Sprite Fright',
    thumbnail: 'https://i.ibb.co/pbMGsCV/thumbnail-Sprite-Fright.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/faf2b24f-d88c-48ad-82ec-91f11aa086e5',
  },
  {
    name: 'CHARGE',
    thumbnail: 'https://i.ibb.co/sW53x0r/thumbnail-charge.png',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/14abcc35-2c10-4200-a69c-3160b06d4ba1',
  },
];

export default function SearchBar({
  imageURL,
  clearImageURL,
  handleURLpaste,
  handleFileSelect,
}) {
  const [showSampleModal, setShowSampleModal] = useState(false);

  useEffect(() => {
    // preload images
    sampleScreenshots.map((picture) => {
      new Image().src = picture.thumbnail;
      new Image().src = picture.url;
    });
  }, []);

  const detectInputClick = useCallback(() => {
    setShowSampleModal(true);
  }, []);

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideDetector(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowSampleModal(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideDetector(wrapperRef);

  /** * Component that alerts if you click outside of it */
  return (
    <div className={searchBar}>
      <div className={searchBarContent} ref={wrapperRef}>
        <div
          className={
            showSampleModal
              ? `${formControls} ${formControlsFocus}`
              : `${formControls}`
          }
        >
          <form>
            <input
              type="text"
              pattern="https?://.+"
              required
              name="imageURL"
              className={imageUrlInput}
              placeholder="Paste screenshot URL or drop your screenshot below"
              value={imageURL.startsWith('http') ? imageURL : ''}
              onChange={(e) => {
                handleURLpaste(e);
                setShowSampleModal(false);
              }}
              onPaste={() => {
                setShowSampleModal(false);
              }}
              onClick={detectInputClick}
            />
            <input type="submit" />
            {imageURL.startsWith('http') && (
              <div className={closeSvgContainer} onClick={clearImageURL}>
                <span className={closeSvg}></span>
              </div>
            )}
            <div className={file}>
              <input
                type="file"
                name="files[]"
                accept="image/*"
                onChange={(e) => {
                  handleFileSelect(e);
                  setShowSampleModal(false);
                }}
              />
            </div>
          </form>
        </div>
        {showSampleModal && (
          <div className={sampleModalContainer}>
            <div className={sampleModalContent}>
              <div className={sampleModalText}>
                <strong>Sample Screenshots</strong>
              </div>
              <div className={sampleModalGroup}>
                {sampleScreenshots.map(({ name, thumbnail, url }) => {
                  return (
                    <div
                      key={url}
                      className={sampleModalItem}
                      onClick={() => {
                        if (imageURL !== url) {
                          clearImageURL();
                          // make use of this existing function
                          handleURLpaste(url);
                        }
                        setShowSampleModal(false);
                      }}
                    >
                      <div className={sampleModalItemLeft}>
                        <img src={thumbnail} alt={name} />
                      </div>
                      <div className={sampleModalItemRight}>
                        <span>{name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
