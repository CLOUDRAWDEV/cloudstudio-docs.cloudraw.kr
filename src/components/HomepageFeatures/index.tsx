import React from "react"
import styles from "./styles.module.css"

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.mainWrap}>
                    <div className={styles.mainLogo} />
                    <img
                        style={{ width: "80%", height: "auto" }}
                        src={"/img/cloudstudio_img_ko.png"}
                        alt={"landing"}
                    />
                    <div style={{ height: "24px" }} />
                </div>
            </div>
        </section>
    )
}
