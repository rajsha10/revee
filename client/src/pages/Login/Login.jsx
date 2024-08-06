import React, { useState } from "react";
import styles from "./Login.module.css";
import { LoginForm } from "../../components/LoginForm";

const Login = () => {
  

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
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
