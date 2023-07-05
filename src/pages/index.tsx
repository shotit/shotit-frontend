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
          <div>
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
