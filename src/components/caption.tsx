import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../../src/scss/_textStyle.module.scss';

export default function Figure({ src, caption }) {
    return (
      <section className={styles.Caption}>
        <img src={useBaseUrl(src)} alt={caption} />
        <figcaption className={styles.captionText}>{`${caption}`}</figcaption>
      </section>
    )
  }