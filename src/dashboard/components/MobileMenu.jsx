/** @format */

// src/dashboard/components/MobileMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MobileMenu.module.css";

const MobileMenu = () => {
  return (
    <div id='mobile__menu' className={styles.overlay}>
      <Link to='/' className={styles.close}>
        &times;
      </Link>
      <div className={styles.overlay__content}>
        <Link to='/'>Projects</Link>
        <Link to='/news'>News</Link>
        <Link to='/verification'>Verification (Discord OAuth2)</Link>
      </div>
    </div>
  );
};

export default MobileMenu;
