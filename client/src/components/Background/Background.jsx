import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Background.module.css';

const Background = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.heading}>Revee.</h1>
        <div className={styles.textSection}>
          <p className={styles.text}>Review, Earn, Repeat:</p>
          <p className={styles.text}>Get Bitcoin for Your Feedback!</p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Outlet />
      </div>
    </div>
  );
};

export default Background;
