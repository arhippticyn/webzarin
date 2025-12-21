import React from "react";
import styles from "../styles/Header.module.css";
import NavLogo from "../image/nav-image/nav-icon.svg";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <img className={styles.navLogo} src={NavLogo} alt="" />
            <h2 className={styles.navTitle}>Zarrin</h2>
          </div>

          <div className={styles.navRight}>
            <button className={styles.navRightBurger}>
              <RxHamburgerMenu />
            </button>
            <ul className={styles.navRightList}>
              <li className={styles.navRightListItem}>Blog</li>
              <li className={styles.navRightListItem}>About</li>
            </ul>

            <button className={styles.navRightSearch}>
              <CiSearch />
            </button>

            <button className={styles.navRightBtn}>Contact Us</button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
