import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Logo from '@site/static/img/logo.svg';
import LogoBg from '@site/static/img/logo-bg.svg';
import styles from './index.module.css';
import ImagePreload from 'nt-web-image-preload';

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

const preloadImage = () => {
  // preload images
  const polishedArray = sampleScreenshots.reduce((result, current) => {
    result.push(current.thumbnail);
    result.push(current.url);
    return result;
  }, []);
  ImagePreload(polishedArray, () => {
    console.log('sampleScreenshots preload');
  });
};

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Screenshot-to-Video</h1>
        <h1 className="hero__title">Search Engine</h1>
        <div className="hero__subtitle">
          <div className="hero__subtitle">
            Shotit is a screenshot-to-video search engine
          </div>
          <div className="hero__subtitle">
            tailored for TV & Film, blazing-fast and
          </div>
          <div className="hero__subtitle">compute-efficient.</div>
          <br />
        </div>
        <section className="hero__btngroup">
          <div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/get_started"
            >
              Get Started
            </Link>
          </div>
          <div onMouseOver={() => preloadImage()}>
            <Link className="button button--success button--lg" to="/demo">
              Try a Demo
            </Link>
          </div>
        </section>
      </div>
      <div className={styles.logoBgContainer}>
        <div className={styles.logoBg}>
          <LogoBg height={563} width={666} className={styles.svgContent} />
        </div>
        <div className={styles.logo}>
          <Logo height={600} width={600} className={styles.svgContent} />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Shotit, ${siteConfig.title}`}
      description="Shotit is a screenshot-to-video Search Engine tailored for TV & Film, blazing-fast and compute-efficient."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
