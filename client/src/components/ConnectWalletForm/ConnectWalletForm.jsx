import React from "react";
import styles from "./ConnectWalletForm.module.css"; // Ensure the path is correct
import MetaMaskLogo from "../../assets/metamask.png"; // Correct import
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setWalletConnection } from "../../features/wallet/walletSlice";

const ConnectWalletForm = ({ username }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);

  const handleConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        console.log("Connected accounts:", accounts);

        // Update Redux state with wallet connection status and account details
        dispatch(setWalletConnection({
          isConnected: true,
          accounts: accounts,
        }));

        // Redirect to Feed page after successful wallet connection
        navigate("/feed");
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.welcomeMessage}>
        Welcome Back, <br /> <span>{username}</span>
      </h2>
      <div className={styles.logoContainer}>
        <img src={MetaMaskLogo} alt="MetaMask Logo" className={styles.logo} />
      </div>
      <button className={styles.connectButton} onClick={handleConnect}>
        Connect to MetaMask
      </button>
    </div>
  );
};

export default ConnectWalletForm;
