import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from "../../features/auth/authSlice";
import { auth, signInWithEmailAndPassword } from "../../firebaseConfig"; // Adjust the import path
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add state for error handling
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;
      
      // Update user state with Redux
      dispatch(setUser({
        uid: user.uid,
        username: user.displayName || username,
        email: user.email,
        name: user.displayName || 'User Name',
      }));
      
      // Redirect to home page after successful login
      navigate("/connect-wallet");
    } catch (error) {
      // Handle login errors
      setError("Invalid credentials. Please try again.");
      console.error("Login error:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formText}>
        <h2 className={styles.formTitle}>Login</h2>
        <p className={styles.formSubText}>Glad You're Back!</p>
      </div>

      <input
        type="text"
        placeholder="Username (Email)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
      {error && <p className={styles.error}>{error}</p>} {/* Display error if any */}
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
        <p className={styles.footerText} onClick={() => navigate("/signup")}>
          Don't have an account? Sign Up
        </p>
        <div className={styles.footerLinks}>
          <span>Terms and Conditions</span>
          <span>Support</span>
          <span>Customer Care</span>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
