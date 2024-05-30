import React from 'react';
import styles from './styles.module.css';


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.mainWrap}>
            <div className={styles.mainLogo}/>
            <img style={{width: "80%", height:"auto"}} src={"/img/cs_landing.png"} alt={"landing"}/>
            <div style={{height:"24px"}}/>
            <h1>- 주요 기능 -</h1>
            <div style={{ height:"12px"}}/>
            <img style={{width: "80%", height:"auto"}} src={"/img/functions.png"} alt={"functions"}/>
        </div>
      </div>
    </section>
  );
}
