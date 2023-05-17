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
    thumbnail: 'https://i.ibb.co/n8ysJ6B/elephant-s-dream.png',
    url: 'https://i.ibb.co/Fq1bTmX/elephant-s-dream.png',
  },
  {
    name: 'Big Buck Bunny',
    thumbnail: 'https://i.ibb.co/8mrXQmZ/big-buck-bunny.png',
    url: 'https://i.ibb.co/HKtX9K8/big-buck-bunny.png',
  },
  {
    name: 'Sintel',
    thumbnail: 'https://i.ibb.co/MnDFJZQ/sintel.png',
    url: 'https://i.ibb.co/1ZfF47j/sintel.png',
  },
  {
    name: 'Tears of Steel',
    thumbnail: 'https://i.ibb.co/5nRRLnp/tears-of-steel.png',
    url: 'https://i.ibb.co/rcwwHc8/tears-of-steel.png',
  },
  {
    name: 'Caminandes 2 gran dillama',
    thumbnail: 'https://i.ibb.co/jDqwp8P/Caminandes-2-Gran-Dillama.png',
    url: 'https://i.ibb.co/zZC2kmT/Caminandes-2-Gran-Dillama.png',
  },
  {
    name: 'Cosmos Laundromat: First Cycle',
    thumbnail: 'https://i.ibb.co/wgrvtHr/Cosmos-Laundromat-First-Cycle.png',
    url: 'https://i.ibb.co/sRJB7SJ/Cosmos-Laundromat-First-Cycle.png',
  },
  {
    name: 'Glass Half',
    thumbnail: 'https://i.ibb.co/z5Wm5p9/glass-half.png',
    url: 'https://i.ibb.co/TTDwT6j/glass-half.png',
  },
  {
    name: 'Agent 327',
    thumbnail: 'https://i.ibb.co/NKjsJGG/agent-327.png',
    url: 'https://i.ibb.co/dD2rVHH/agent-327.png',
  },
  {
    name: 'Caminandes 3 Llamigos',
    thumbnail: 'https://i.ibb.co/JBDBnTC/Caminandes-3-Llamigos.png',
    url: 'https://i.ibb.co/yfHf0CV/Caminandes-3-Llamigos.png',
  },
  {
    name: 'The Daily Dweebs',
    thumbnail: 'https://i.ibb.co/5YqFSdk/The-Daily-Dweebs.png',
    url: 'https://i.ibb.co/cbzLZPw/The-Daily-Dweebs.png',
  },
  {
    name: 'HERO',
    thumbnail: 'https://i.ibb.co/J2bFQYD/HERO.png',
    url: 'https://i.ibb.co/4MDgdbh/HERO.png',
  },
  {
    name: 'Spring',
    thumbnail: 'https://i.ibb.co/ZNCPSmp/spring.png',
    url: 'https://i.ibb.co/M9L4f6x/spring.png',
  },
  {
    name: 'Coffee Run',
    thumbnail: 'https://i.ibb.co/zXpzGwY/coffee-run.png',
    url: 'https://i.ibb.co/Ht6jnQs/coffee-run.png',
  },
  {
    name: 'Sprite Fright',
    thumbnail: 'https://i.ibb.co/gRPTvBB/Sprite-Fright.png',
    url: 'https://i.ibb.co/G5t2sbb/Sprite-Fright.png',
  },
  {
    name: 'CHARGE',
    thumbnail: 'https://i.ibb.co/3SZksRN/charge.png',
    url: 'https://i.ibb.co/frwQSDp/charge.png',
  },
];

export default function SearchBar({
  imageURL,
  clearImageURL,
  handleURLpaste,
  handleFileSelect,
}) {
  const [showSampleModal, setShowSampleModal] = useState(false);

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
