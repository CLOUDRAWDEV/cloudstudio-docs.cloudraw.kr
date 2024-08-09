import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '/src/scss/_markdown.module.scss'

export default function Figure({ src, caption }) {
    return (
      <figure className={styles.caption}>
        <div className={styles.caption_img}>
          <img src={useBaseUrl(src)} alt={caption} />
        </div>
      <figcaption className={styles.captionText}>{`${caption}`}</figcaption>
    </figure>
    )
  }
