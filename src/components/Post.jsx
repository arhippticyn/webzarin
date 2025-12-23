import React from 'react';
import styles from '../styles/Post.module.css'

const Post = ({post}) => {
  return (
    <li className={styles.post}>
        <img className={styles.postImage} src={`${import.meta.env.BASE_URL}${post.image}`} alt="" />
        <p className={styles.postInfo}>{post.category} <span>{post.date}</span></p>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.postDescr}>{post.description}</p>
        <button className={styles.postBtn}>Read More...</button>
    </li>
  )
}

export default Post;