import React from "react";
import styles from "../styles/Al.module.css";
import AlImage from "../image/al-image/AlImage.png";

const Al = () => {
  return (
    <section className={styles.al}>
      <div className={styles.alLeft}>
        <p className={styles.alLeftPost}>Featured Post</p>
        <h1 className={styles.alLeftTitle}>How AI will Change the Future</h1>
        <p className={styles.alLeftDescr}>
          The future of AI will see home robots having enhanced intelligence,
          increased capabilities, and becoming more personal and possibly cute.
          For example, home robots will overcome navigation, direction
        </p>
        <button className={styles.alLeftBtn}>Read more</button>
      </div>
      <div className={styles.alRight}>
        <img src={AlImage} alt="" />
      </div>
    </section>
  );
};

export default Al;
