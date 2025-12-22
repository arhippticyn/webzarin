import React from 'react';
import styles from '../styles/Form.module.css'

const Form = () => {
  return (
    <section className={styles.SectionForm}>
        <div className={styles.formgraph}></div>
        <h2 className={styles.formTitle}>Get our stories delivered From us to your inbox weekly.</h2>
        <form action="" className={styles.form}>
            <input type="email" placeholder='Your Email' />
            <button type="submit">Get Started</button>
        </form>
        <p className={styles.formDescr}>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
    </section>
  )
}

export default Form;