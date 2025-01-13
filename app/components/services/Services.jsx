import React from 'react'
import styles from './Service.module.css'
function Services() {
  return (
    <div className={styles.serviceImages}>
        <img src="/sunnyside-agency-landing-page-main/images/desktop/image-gallery-milkbottles.jpg" alt="milk" className={styles.div1}/>
        <img src="/sunnyside-agency-landing-page-main/images/desktop/image-gallery-orange.jpg" alt="orange" className={styles.div2} />
        <img src="/sunnyside-agency-landing-page-main/images/desktop/image-gallery-cone.jpg" alt="cone" className={styles.div3}/>
        <img src="/sunnyside-agency-landing-page-main/images/desktop/image-gallery-sugarcubes.jpg" alt="sugarcane" className={styles.div4} />
    </div>
  )
}

export default Services