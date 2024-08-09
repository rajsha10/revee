import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from "../../features/auth/authSlice";
import { auth, signInWithEmailAndPassword, db } from "../../firebaseConfig"; // Adjust the import path
import { doc, getDoc } from "firebase/firestore";
import styles from "./LoginForm.module.css";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "@anon-aadhaar/react";

const LoginForm = () => {
  const [anonAadhaar] = useAnonAadhaar();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (anonAadhaar.status === 'authenticated') {
      handleAnonAadhaarLogin(anonAadhaar.data);
    }
  }, [anonAadhaar]);

  const handleAnonAadhaarLogin = async (data) => {
    try {
      const userDoc = await getDoc(doc(db, "users", data.nullifierHash));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        dispatch(setUser({
          uid: data.nullifierHash,
          username: userData.username,
          email: userData.email,
          name: userData.name,
        }));
        console.log("Anon Aadhaar user set:", {
          uid: data.nullifierHash,
          username: userData.username,
          email: userData.email,
          name: userData.name,
        });
        navigate("/connect-wallet");
      } else {
        setError("User not found.");
      }
    } catch (error) {
      setError("Login error: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        dispatch(setUser({
          uid: user.uid,
          username: userData.username,
          email: user.email,
          name: userData.name,
        }));
        navigate("/connect-wallet");
        console.log(user)
      } else {
        setError("User not found.");
      }
    } catch (error) {
      setError("Invalid credentials. Please try again.");
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
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      {error && <p className={styles.error}>{error}</p>}
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
      <LogInWithAnonAadhaar nullifierSeed={1234} />
      <p>{anonAadhaar?.status}</p>
    </form>
  );
};

export default LoginForm;
