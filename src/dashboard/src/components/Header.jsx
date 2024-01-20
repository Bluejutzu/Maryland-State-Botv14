/** @format */

// src/dashboard/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        Maryland State Roleplay
      </Link>
      {/* Navigation links */}
      {/* ... */}
      <Link to='/verification' className={styles.cta}>
        Contact
      </Link>
      <p className={`${styles.menu} ${styles.cta}`}>Menu</p>
    </header>
  );
};

export default Header;
