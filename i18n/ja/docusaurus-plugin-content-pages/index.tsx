import React from "react"
import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import styles from "./index.module.css"
import Head from "@docusaurus/Head"

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <h1 className={styles.mainTitle}>{siteConfig.title}</h1>
            </div>
        </header>
    )
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta property="og:url" content="https://docs.cloudraw.kr" />
                <meta property="og:title" content="CloudStudio Docs" />
                <meta
                    property="og:description"
                    content="클라우드스튜디오 서비스 가이드"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="CloudStudio Docs" />
                <meta
                    property="og:image"
                    content="https://cstudio.app/images/mainLogo/mainCloudStudio.png"
                />
                <meta
                    name="description"
                    content="클라우드스튜디오는 클라우드 IaC 시각화 서비스로 클라우드 인프라를 GUI 환경에서 쉽고 빠르게 구성하고, 비용측정, 보안점검, 배포 등 편리하게 관리할 수 있습니다."
                />
            </Head>
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    )
}
