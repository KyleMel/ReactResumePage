import React from "react";
import { Link } from "react-router-dom";
import styles from "./Title.module.css"

const TopBanner = () => {
  return (
    <header>
      <Link to ="https://github.com/KyleMel" className={styles.bannerLink}>Github</Link>
      <Link to ="https://www.linkedin.com/in/kyle-melton-1a1541162/" className={styles.bannerLink}>LinkedIn</Link>
    </header>
  );
}

export default TopBanner;