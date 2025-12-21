import React from "react";
import styles from "../styles/Development.module.css";

const Development = () => {
  return (
    <section className={styles.development}>
      <div className={styles.developmentDown}>
        <div className={styles.developmentUp}></div>
        <div className={styles.developmentDownInfo}>
          <p className={styles.developmentInfo}>
            delelopment <span>16 March 2023</span>
          </p>
          <h2 className={styles.developmentTitle}>
            How to make a Game look more attractive with New VR & AI Technology
          </h2>
          <p className={styles.developmentDescr}>
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we’re committed
            to making AI accessible to everyone.
          </p>
          <button className={styles.developmentBtn}>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Development;
