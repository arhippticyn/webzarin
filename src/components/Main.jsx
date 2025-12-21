import React from "react";
import styles from "../styles/Main.module.css";
import Al from "./Al";
import Development from "./Development";

const Main = () => {
  return (
    <div>
      <div className={styles.container}>
        <Al />
        <Development />
      </div>
    </div>
  );
};

export default Main;
