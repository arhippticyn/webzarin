import React from "react";
import styles from "../styles/Posts.module.css";
import Post from "./Post";

const Posts = ({ data }) => {
  return (
    <section className={styles.postsSection}>
      <div className={styles.postTitul}>
        <h2 className={styles.postsTitle}>Popular Post</h2>
        <button className={styles.postsBtn}>View All</button>
      </div>

      <ul className={styles.postsItems}>
        {data.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
      </ul>
    </section>
  );
};

export default Posts;
