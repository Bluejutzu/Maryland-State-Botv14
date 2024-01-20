/** @format */

// src/dashboard/pages/News.jsx
import React from "react";
import styles from "../styles/News.module.css"; // Import the corresponding styles

const News = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>News Page</h1>
      <p className={styles.paragraph}>
        Explore the latest news and updates here!
      </p>
    </div>
  );
};

export default News;
