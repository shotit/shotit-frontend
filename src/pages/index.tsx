import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Logo from '@site/static/img/logo.svg';
import LogoBg from '@site/static/img/logo-bg.svg';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Screenshot-to-Video</h1>
        <h1 className="hero__title">Search Engine</h1>
        <p className="hero__subtitle">
          <div>Shotit is a screenshot-to-video search engine</div>
          <div>tailored for TV & Film, blazing-fast and</div>
          <div>compute-efficient.</div>
        </p>
        <div className={styles.headerBtnGroup}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
          <Link className="button button--success button--lg" to="/docs/intro">
            Try a Demo
          </Link>
        </div>
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
