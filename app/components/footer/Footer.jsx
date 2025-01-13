import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.contact}>
      <a href="#" className={styles.footerLogo}>
        sunnyside
      
      </a>
      <nav id="bottomnav">
        <ul className={styles.links}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      <div className={styles.socialLinks}>
        <a href="" aria-label="go to facebook">
          <img src="/sunnyside-agency-landing-page-main/images/icon-facebook.svg" alt="" />
        </a>
        <a href="" aria-label="go to instagram">
        <img src="/sunnyside-agency-landing-page-main/images/icon-instagram.svg" alt="" />
        
        </a>
        <a href="" aria-label="go to twitter">
        <img src="/sunnyside-agency-landing-page-main/images/icon-twitter.svg" alt="" />
          
        </a>
        <a href="" aria-label="go to pinterest">
        <img src="/sunnyside-agency-landing-page-main/images/icon-pinterest.svg" alt="" />
          
        </a>
      </div>
      <p className={styles.attribution}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/je-jo" target="_blank">
          Jelena Jovicic
        </a>
        , 2022.
      </p>
    </footer>
  );
};

export default Footer;
