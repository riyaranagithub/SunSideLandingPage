import React from 'react'
import styles from './Hero.module.css'
// import Image from '../../../sunnyside-agency-landing-page-main/images/desktop/image-header.jpg'

function HeroSection() {
  return (
    <div className={styles.hero}>
    <div className={styles.herotext}>
      <h1 className={styles.text}>WE ARE CREATIVES</h1>
    </div>
    <div className={styles.heroarrow}>
      <img src="/sunnyside-agency-landing-page-main/images/icon-arrow-down.svg" alt="arrow" />
    </div>
  </div>
  )
}

export default HeroSection