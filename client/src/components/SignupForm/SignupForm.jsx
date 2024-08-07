import React, { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if username is unique
    const usernameDoc = await getDoc(doc(db, "usernames", username));
    if (usernameDoc.exists()) {
      alert("Username already taken. Please choose a different one.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        username,
      });

      // Store username to ensure uniqueness
      await setDoc(doc(db, "usernames", username), {
        uid: user.uid,
      });

      // Update Redux state
      dispatch(setUser({
        uid: user.uid,
        email,
        name,
        username,
      }));

      console.log("User signed up:", user);
      navigate("/login"); // Redirect to login page after successful signup
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use. Please choose a different email.");
      } else {
        console.error("Error signing up:", error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSignup} className={styles.signupForm}>
      <div className={styles.formText}>
        <h2 className={styles.formTitle}>Sign Up</h2>
        <p className={styles.formSubText}>Join Us Today!</p>
      </div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={styles.input}
      />
      <input
        type="email"
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
      <button type="submit" className={styles.button}>
        Sign Up
      </button>
      <div className={styles.forgotPassword}></div>
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
        <p className={styles.footerText} onClick={() => navigate("/login")}>
          Already have an account? <span>Login</span>
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

export default SignupForm;
