import React from "react";
import styles from "../styles/Main.module.css";
import Al from "./Al";
import Development from "./Development";
import Posts from "./Posts";
import data  from '../posts.json'
import Form from "./Form";

const Main = () => {
  return (
    <div>
      <div className={styles.container}>
        <Al />
        <Development />
        <Posts data={data} />
        <Form />
      </div>
    </div>
  );
};

export default Main;
