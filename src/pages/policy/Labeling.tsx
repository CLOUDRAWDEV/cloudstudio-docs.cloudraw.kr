import { iLabeling } from "@site/src/models/labelingDetailBox"
import React, { forwardRef, useEffect, useMemo, useState } from "react"
import styles from "../../scss/_labeling.module.scss"
import LabelingDetailBox from "./LabelingDetailBox"

function Labeling(
    { title, xmlns, width, height, d, contents }: iLabeling,
    ref: React.ForwardedRef<HTMLDivElement>
) {
    const [isLabelingOepn, setIsLabelingOpen] = useState(false)
    const handleMouseOver = () => {
        setIsLabelingOpen(true)
    }
    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsLabelingOpen(false)
        }, 100)
    }

    useEffect(() => {
        console.log()
    }, [])

    return (
        <article
            className={styles.labeling}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <section className={styles.labeling__wrap} ref={ref}>
                <svg
                    xmlns={xmlns}
                    viewBox="0 0 24 24"
                    width={width}
                    height={height}
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d={d} />
                </svg>
            </section>
            <h5>{title}</h5>
            {isLabelingOepn && (
                <LabelingDetailBox title={title} contents={contents} />
            )}
        </article>
    )
}

export default forwardRef(Labeling)
