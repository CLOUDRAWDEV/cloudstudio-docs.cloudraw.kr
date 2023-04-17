import React from "react"
import { iLabelingDetailBox } from "@site/src/models/labelingDetailBox"
import styles from "../../scss/_labeling.module.scss"

// - 마우스 호버 시 라벨링을 보여줄 컴포넌트와 함께 사용됩니다.

function LabelingDetailBox({ title, contents }: iLabelingDetailBox) {
    return (
        <article className={styles.labelingDetailBox}>
            <h5>{title}</h5>
            <section>{contents}</section>
        </article>
    )
}

export default LabelingDetailBox
