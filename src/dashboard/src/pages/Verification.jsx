/** @format */

// src/dashboard/pages/Verification.jsx
import React from "react";
import styles from "../assets/styles/MobileMenu.module.css"; // Import the corresponding styles

const Verification = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Verification Page</h1>
      <p className={styles.paragraph}>
        Verify your identity using Discord OAuth2.
      </p>
    </div>
  );
};

export default Verification;
