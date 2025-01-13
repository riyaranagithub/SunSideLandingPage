import React from "react";
import styles from "./Test.module.css";
const Testimonial = () => {
  return (
    <div className={styles.clientContainer}>
      <h1>Client testimonials</h1>

      <section className={styles.cards}>
        <div className={styles.card}>
        
            <img
              src="/sunnyside-agency-landing-page-main/images/image-emily.jpg"
              alt="emily"
            />
      
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h3 className={styles.subTittle}>
            Emily R.
            <span>Marketing Director</span>
          </h3>
        </div>
        <div className={styles.card}>
         
            <img
              src="/sunnyside-agency-landing-page-main/images/image-thomas.jpg"
              alt=""
            />
         
          <p>
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h3 className={styles.subTittle}>
            Thomas S. <span>Chief Operating Officer</span>
          </h3>
        </div>
        <div className={styles.card}>
         
            <img
              src="/sunnyside-agency-landing-page-main/images/image-jennie.jpg"
              alt=""
            />
        
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h3 className={styles.subTittle}>
            Jennie F. <span>Business Owner</span>
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
