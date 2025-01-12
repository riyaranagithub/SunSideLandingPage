import React from "react";
import styles from "./Card.module.css";
function CardSection() {
  return (
    <>
      <div>
        <div className={styles.card1}>
          <div className={styles.card1Text}>
            <h2>Transform your brand</h2>
            <p>
              {" "}
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
              <a>LEARN MORE</a>
            </p>
          </div>

          <div
            className={`${styles.card1Image} bg-[url("/sunnyside-agency-landing-page-main/images/desktop/image-transform.jpg")]`}
          ></div>
        </div>
        <div className={styles.card2}>
          <div
            className={`${styles.card2Image} bg-[url("/sunnyside-agency-landing-page-main/images/desktop/image-stand-out.jpg")]`}
          ></div>
          <div className={styles.card2Text}>
            <h2>Stand out to the right audience</h2>
            <p>
              {" "}
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
              <a>LEARN MORE</a>
            </p>
          </div>
        </div>
        <div className={styles.card3}>
          <section className={styles.graphicDesign}>
            <section className={styles.textContent}>
              <h1> Graphic design</h1>
              <p>
                {" "}
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </section>
          </section>
          <section className={styles.photographySection}>
            <section className={styles.textContent}>
              <h1>Photography</h1>
              <p>
                {" "}
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </section>
          </section>
        </div>
       
      </div>
    </>
  );
}

export default CardSection;
