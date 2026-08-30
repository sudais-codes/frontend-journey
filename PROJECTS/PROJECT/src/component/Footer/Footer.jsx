import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div id="contact">
      <div className={styles['footer-Planto']}> Planto.</div>
      <div className={styles.footer}>
        <div className={styles.links}>
            <h3 className={styles.Quick} > Quick Links </h3>
            <ul>
                <li style={{ cursor: 'pointer' }} onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>HOME</li>
                <li style={{ cursor: 'pointer' }} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>ABOUT</li>
                <li style={{ cursor: 'pointer' }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>CONTACT</li>
            </ul>
        </div>
        <div className={styles.touch}>
            <h3 className={styles['get-touch']}> GET IN TOUCH </h3>
            <ul>
                <li>Call : +92*******</li>
                <li>Whatsapp : +92******</li>
                <li>For Bulk orders whatsapp</li>
                <li>Email : example@gmail.com</li>
                <li>Address : TechNext</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
