import React, { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import SignupForm from "../../components/SignupForm/SignupForm";

const Signup = () => {
 

  return (
  
  <SignupForm/>
  
  );
};

export default Signup;
