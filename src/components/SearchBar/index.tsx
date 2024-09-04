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
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/77caefa3-32e1-41cf-94b5-50eeab627a88',
  },
  {
    name: 'Big Buck Bunny',
    thumbnail:
      'https://github.com/user-attachments/assets/2a67a36c-ab69-4e30-9b54-d22f3d5ecc7d',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/1f86b1b0-cbbf-4310-8192-cfb4bb2a1f7d',
  },
  {
    name: 'Sintel',
    thumbnail:
      'https://github.com/user-attachments/assets/a0d4efe3-ec6b-48a3-aa12-6bc1972a5fa5',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/35dc7137-3573-4c5e-b60f-28b2a25c5636',
  },
  {
    name: 'Tears of Steel',
    thumbnail:
      'https://github.com/user-attachments/assets/2f69840b-7c42-4427-8a4c-bdbe3e33e6d3',
    url: 'https://github.com/user-attachments/assets/eda091b5-c771-4d09-99fd-a32722d6f96d',
  },
  {
    name: 'Caminandes 2 gran dillama',
    thumbnail:
      'https://github.com/user-attachments/assets/413d0c7b-9a91-41e7-a42f-dcb15fea4bf6',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/162c3d49-bf16-4ee5-836e-64774bcbac7b',
  },
  {
    name: 'Cosmos Laundromat: First Cycle',
    thumbnail:
      'https://github.com/user-attachments/assets/d49a255d-c709-49a5-87da-08fc9faa245e',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/8898eb3e-936c-4714-933d-f0bcaeedcca4',
  },
  {
    name: 'Glass Half',
    thumbnail:
      'https://github.com/user-attachments/assets/4f90f282-aad2-4b3b-bb25-4e8fb372e33b',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/f9cfbd67-18a0-434c-b67f-5672bd6a9a8c',
  },
  {
    name: 'Agent 327',
    thumbnail:
      'https://github.com/user-attachments/assets/8d051f7c-9657-4ae5-8709-a493102a0a3b',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/8aecb218-3a61-4478-a191-db4d4a331d6e',
  },
  {
    name: 'Caminandes 3 Llamigos',
    thumbnail:
      'https://github.com/user-attachments/assets/26f8b772-bb41-400f-9d6e-eebef23c4bd7',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/43d82476-b519-46b5-8e10-722ae20c4184',
  },
  {
    name: 'The Daily Dweebs',
    thumbnail:
      'https://github.com/user-attachments/assets/895ba30a-27a7-41c4-bd41-97889db27f8a',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/487c76b2-2d64-4971-b802-0b17169eaec0',
  },
  {
    name: 'HERO',
    thumbnail:
      'https://github.com/user-attachments/assets/41e0a497-a4cf-4de0-aef3-f28b7e675c42',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/38a068eb-9045-4962-a21b-74ffe934bc86',
  },
  {
    name: 'Spring',
    thumbnail:
      'https://github.com/user-attachments/assets/5c904366-863a-4f1a-870c-868d6a26cde5',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/0f356261-7ad7-422b-a45e-f925d4ed7be1',
  },
  {
    name: 'Coffee Run',
    thumbnail:
      'https://github.com/user-attachments/assets/7192d793-b239-4191-b9f4-d8131dbf4b12',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/86a57880-fdba-4559-a085-16b6e8886ac9',
  },
  {
    name: 'Sprite Fright',
    thumbnail:
      'https://github.com/user-attachments/assets/c3ae385e-1450-474a-b6c5-de7946880d4a',
    url: 'https://github.com/shotit/shotit-frontend/assets/27696701/faf2b24f-d88c-48ad-82ec-91f11aa086e5',
  },
  {
    name: 'CHARGE',
    thumbnail:
      'https://github.com/user-attachments/assets/d5837045-4445-4a53-8488-ace794c095e5',
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
