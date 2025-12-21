import React from 'react';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Main from '../components/Main';

const Home = () => {
  return (
    <div className={styles.pageWrapper}>
        <Header />
        <Main />
    </div>
  )
}

export default Home;