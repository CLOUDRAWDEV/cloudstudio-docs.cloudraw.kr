import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from './HomepageFeatures';
import styles from './index.module.css';
import Head from "@docusaurus/Head"

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.mainTitle}>{siteConfig.title}</h1>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                property="og:url"
                content="https://en/docs.cloudraw.kr"
            />
            <meta property="og:title" content="CloudStudio Docs" />
            <meta
                property="og:description"
                content="Cloud Studio Service Guide"
            />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="CloudStudio Docs" />
            <meta
                property="og:image"
                content="https://cstudio.app/images/mainLogo/mainCloudStudio.png"
            />
            <meta
                name="description"
                content="Cloud Studio is a cloud IaC visualization service that allows users to easily and quickly configure cloud infrastructure in a GUI environment, as well as conveniently manage cost estimation, security checks, deployment, and more."
            />
        </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
