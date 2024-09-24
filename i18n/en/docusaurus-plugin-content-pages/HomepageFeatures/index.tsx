import React from 'react';
import styles from './styles.module.css';


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.mainWrap}>
            <div className={styles.mainLogo}/>
            <img style={{width: "80%", height:"auto"}} src={"./img/cloudstudio_img_en.png"} alt={"landing"}/>
            <div style={{height:"24px"}}/>
            <h1>- Main Function -</h1>
            <div style={{ height:"12px"}}/>
            <img style={{width: "80%", height:"auto"}} src={"./img/functions.png"} alt={"functions"}/>
        </div>
      </div>
    </section>
  );
}
