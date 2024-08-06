import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
  };

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
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formText}>
            <h2 className={styles.formTitle}>Login</h2>
            <p className={styles.formSubText}>Glad You're Back!</p>
          </div>

          <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <div className={styles.checkbox}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
          <p className={styles.forgotPassword}>Forgot Password?</p>
          <div className={styles.orSeparator}>or</div>
          <div className={styles.socialLogin}>
            <ion-icon
              style={{ fontSize: "3rem", cursor: "pointer" }}
              className={styles.socialIcon} 
              name="logo-facebook"
            ></ion-icon>
            <ion-icon
              style={{ fontSize: "3rem", cursor: "pointer" }}
              className={styles.socialIcon}
              name="logo-google"
            ></ion-icon>
          </div>
          <div className={styles.footer}>
            <p className={styles.footerText}>Don't have an account? Sign Up</p>
            <div className={styles.footerLinks}>
              <span>Terms and Conditions</span>
              <span>Support</span>
              <span>Customer Care</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
