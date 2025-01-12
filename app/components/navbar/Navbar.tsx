"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles["navbar-logo"]}>sunnyside</div>
        <div
          className={`${styles["links"]}`}
        >
          <a href="#about" className={styles["nav-link"]}>
            About
          </a>
          <a href="#services" className={styles["nav-link"]}>
            Services
          </a>
          <a href="#projects" className={styles["nav-link"]}>
            Projects
          </a>
          <button className={styles.button}>Contact</button>
        </div>
        {/* Hamburger Menu */}
        <div
          className={styles["navbar-hamburger"]}
          onClick={() => setActive((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <div
          className={` ${
            active ? styles.navbarMd : "hidden"
          }`}
        >
          <a href="#about" className={styles["nav-link"]}>
            About
          </a>
          <a href="#services" className={styles["nav-link"]}>
            Services
          </a>
          <a href="#projects" className={styles["nav-link"]}>
            Projects
          </a>
          <button className={styles.button}>Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
