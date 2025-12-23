import React from "react";
import styles from "../styles/Footer.module.css";
import NavLogo from "../image/nav-image/nav-icon.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.footerFullTitle}>
          <img src={NavLogo} className={styles.footerImage} alt="" />
          <h2 className={styles.footerTitle}>Zarrin</h2>
        </div>
        <ul className={styles.footerItems}>
          <li className={styles.footerItem}>Home</li>
          <li className={styles.footerItem}>Blog</li>
          <li className={styles.footerItem}>About</li>
          <li className={styles.footerItem}>Contact Us</li>
        </ul>

        <ul className={styles.footerItemsLang}>
          <li className={styles.footerItemLang}>fb</li>
          <li className={styles.footerItemLang}>ig</li>
          <li className={styles.footerItemLang}>ln</li>
          <li className={styles.footerItemLang}>yt</li>
        </ul>

        <div className={styles.footerLine}></div>

        <span className={styles.footerInfo}>
          Copyright Ideapeel Inc © 2023. All Right Reserved
        </span>
      </footer>
    </div>
  );
};

export default Footer;
