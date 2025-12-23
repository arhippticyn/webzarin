import React from 'react';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className={styles.pageWrapper}>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default Home;