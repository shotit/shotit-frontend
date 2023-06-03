import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Architecture from '@site/static/img/architecture.png';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Compute efficient',
    Svg: require('@site/static/img/compute-efficient.svg').default,
    description: (
      <>
        Powered by state-of-the-art vector database, Shotit is compute efficient
        to perform million-scale or even billion-scale screenshot-to-video
        search task.
      </>
    ),
  },
  {
    title: 'Blazing fast',
    Svg: require('@site/static/img/blazing-fast.svg').default,
    description: (
      <>
        Trace back your million-scale or even billion-scale videos within
        seconds, blazing fast.
      </>
    ),
  },

  {
    title: 'Cloud native',
    Svg: require('@site/static/img/cloud-native.svg').default,
    description: (
      <>
        Shotit is cloud native architecture ready. You can deploy it with EC2
        and S3 on the go. K8s cluster version coming soon.
      </>
    ),
  },
  {
    title: 'Easy to use',
    Svg: require('@site/static/img/easy-to-use.svg').default,
    description: (
      <>
        Simply use docker compose to boostrap your Shotit search engine out of
        the box and start indexing & searching.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className={styles.features}>
      <div className="container">
        <section>
          <h2 className={styles.searchSectionHeading}>
            Search engine for TV & Film{' '}
            <span className={styles.searchSectionHighlight}>screenshot</span>
          </h2>
          <p className={styles.searchSectionParagraph}>
            Shotit is a screenshot-to-video search engine tailored for TV & Film
            which can be integrated into streaming website or application.
          </p>
        </section>
        <section>
          <div className={`row ${styles.featureList}`}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </section>
        <div className="row">
          <div className="col col--4 col--2--md">
            <div className="col-demo"></div>
          </div>
          <Link
            className="col col--4 col--8--md button button--success button--lg"
            to="https://github.com/shotit/shotit"
          >
            Give Shotit a Star
          </Link>
          <div className="col col--4 col--2--md">
            <div className="col-demo"></div>
          </div>
        </div>
        <section>
          <h2 className={styles.searchSectionHeading}>How it works</h2>
          <div className={styles.howItWorks}>
            <img src={Architecture} />
          </div>
        </section>
        <section>
          <h2 className={styles.searchSectionHeading}>Join the community</h2>
          <div className={styles.joinTheCommunity}>
            <a
              target="_blank"
              href="https://github.com/shotit/shotit"
              rel="noopener noreferrer"
              className={styles.joinTheCommunityText}
            >
              GitHub
              <span>
                <svg
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 12 12"
                  style={{ width: '15px', height: '15px' }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.84623 1.30028H1.15384L1.15384 0.300279L11.0533 0.300279L11.5533 0.30028L11.5533 0.800279L11.5533 10.6998L10.5533 10.6998L10.5533 2.00738L0.80029 11.7604L0.0931833 11.0533L9.84623 1.30028Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/shotit007"
              rel="noopener noreferrer"
              className={styles.joinTheCommunityText}
            >
              Twitter
              <span>
                <svg
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 12 12"
                  style={{ width: '15px', height: '15px' }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.84623 1.30028H1.15384L1.15384 0.300279L11.0533 0.300279L11.5533 0.30028L11.5533 0.800279L11.5533 10.6998L10.5533 10.6998L10.5533 2.00738L0.80029 11.7604L0.0931833 11.0533L9.84623 1.30028Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              target="_blank"
              href="https://discord.gg/h89hnXx4"
              rel="noopener noreferrer"
              className={styles.joinTheCommunityText}
            >
              Discord
              <span>
                <svg
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 12 12"
                  style={{ width: '15px', height: '15px' }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.84623 1.30028H1.15384L1.15384 0.300279L11.0533 0.300279L11.5533 0.30028L11.5533 0.800279L11.5533 10.6998L10.5533 10.6998L10.5533 2.00738L0.80029 11.7604L0.0931833 11.0533L9.84623 1.30028Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
