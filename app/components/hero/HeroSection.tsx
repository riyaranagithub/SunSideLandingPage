import React from 'react'
import styles from './Hero.module.css'
// import Image from '../../../sunnyside-agency-landing-page-main/images/desktop/image-header.jpg'

function HeroSection() {
  return (
    <>
    <div className={styles.herotext}>
      <h1>WE ARE CREATIVES</h1>
    </div>
    <div className={styles.heroarrow}>
      <img src="/sunnyside-agency-landing-page-main/images/icon-arrow-down.svg" alt="arrow" />
    </div>
    <img src="/sunnyside-agency-landing-page-main/images/desktop/image-header.jpg" alt="heroimage" className={styles.heroimage}/>
    </>
  )
}

export default HeroSection