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
    thumbnail:
      'https://github.com/user-attachments/assets/c00fdb81-0b81-4e62-ae5a-f113d408c993',
    url: 'https://i.ibb.co/Fq1bTmX/elephant-s-dream.png',
  },
  {
    name: 'Big Buck Bunny',
    thumbnail:
      'https://github.com/user-attachments/assets/2a67a36c-ab69-4e30-9b54-d22f3d5ecc7d',
    url: 'https://i.ibb.co/HKtX9K8/big-buck-bunny.png',
  },
  {
    name: 'Sintel',
    thumbnail:
      'https://github.com/user-attachments/assets/a0d4efe3-ec6b-48a3-aa12-6bc1972a5fa5',
    url: 'https://i.ibb.co/jknv3693/sintel.jpg',
  },
  {
    name: 'Tears of Steel',
    thumbnail:
      'https://github.com/user-attachments/assets/2f69840b-7c42-4427-8a4c-bdbe3e33e6d3',
    url: 'https://i.ibb.co/gFgyDVn5/tears-of-steel.jpg',
  },
  {
    name: 'Caminandes 2 gran dillama',
    thumbnail:
      'https://github.com/user-attachments/assets/413d0c7b-9a91-41e7-a42f-dcb15fea4bf6',
    url: 'https://i.ibb.co/zZC2kmT/Caminandes-2-Gran-Dillama.png',
  },
  {
    name: 'Cosmos Laundromat: First Cycle',
    thumbnail:
      'https://github.com/user-attachments/assets/d49a255d-c709-49a5-87da-08fc9faa245e',
    url: 'https://i.ibb.co/sRJB7SJ/Cosmos-Laundromat-First-Cycle.png',
  },
  {
    name: 'Glass Half',
    thumbnail:
      'https://github.com/user-attachments/assets/4f90f282-aad2-4b3b-bb25-4e8fb372e33b',
    url: 'https://i.ibb.co/TTDwT6j/glass-half.png',
  },
  {
    name: 'Agent 327',
    thumbnail:
      'https://github.com/user-attachments/assets/8d051f7c-9657-4ae5-8709-a493102a0a3b',
    url: 'https://i.ibb.co/dD2rVHH/agent-327.png',
  },
  {
    name: 'Caminandes 3 Llamigos',
    thumbnail:
      'https://github.com/user-attachments/assets/26f8b772-bb41-400f-9d6e-eebef23c4bd7',
    url: 'https://i.ibb.co/yfHf0CV/Caminandes-3-Llamigos.png',
  },
  {
    name: 'The Daily Dweebs',
    thumbnail:
      'https://github.com/user-attachments/assets/895ba30a-27a7-41c4-bd41-97889db27f8a',
    url: 'https://i.ibb.co/cbzLZPw/The-Daily-Dweebs.png',
  },
  {
    name: 'HERO',
    thumbnail:
      'https://github.com/user-attachments/assets/41e0a497-a4cf-4de0-aef3-f28b7e675c42',
    url: 'https://i.ibb.co/4MDgdbh/HERO.png',
  },
  {
    name: 'Spring',
    thumbnail:
      'https://github.com/user-attachments/assets/5c904366-863a-4f1a-870c-868d6a26cde5',
    url: 'https://i.ibb.co/M9L4f6x/spring.png',
  },
  {
    name: 'Coffee Run',
    thumbnail:
      'https://github.com/user-attachments/assets/7192d793-b239-4191-b9f4-d8131dbf4b12',
    url: 'https://i.ibb.co/Ht6jnQs/coffee-run.png',
  },
  {
    name: 'Sprite Fright',
    thumbnail:
      'https://github.com/user-attachments/assets/c3ae385e-1450-474a-b6c5-de7946880d4a',
    url: 'https://i.ibb.co/G5t2sbb/Sprite-Fright.png',
  },
  {
    name: 'CHARGE',
    thumbnail:
      'https://github.com/user-attachments/assets/d5837045-4445-4a53-8488-ace794c095e5',
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
