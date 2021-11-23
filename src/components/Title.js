import React from "react";
import { Link } from "react-router-dom";
import styles from "./Title.module.css"

const TopBanner = () => {
  return (
    <header>
      <a className={styles.bannerLink} href="https://github.com/KyleMel" target="Kyles Github">Github</a>
      <a className={styles.bannerLink} href="https://www.linkedin.com/in/kyle-melton-1a1541162/" target="Kyles LinkedIn">LinkedIn</a>
    </header>
  );
}

export default TopBanner;