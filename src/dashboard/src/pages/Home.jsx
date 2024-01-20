/** @format */

// src/dashboard/pages/Home.jsx
import React from "react";
import styles from "../styles/Home.module.css"; // Import the corresponding styles

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Home Page</h1>
      <p className={styles.paragraph}>Welcome to the Home page content!</p>
    </div>
  );
};

export default Home;
