import React from "react";
import { useSelector } from "react-redux";
import ConnectWalletForm from "../../components/ConnectWalletForm/ConnectWalletForm";
import { selectAuth } from "../../features/auth/authSlice";

const ConnectWallet = () => {
  const auth = useSelector(selectAuth);
  console.log(auth);

  // Pass username as a prop to ConnectWalletForm
  return (
    <ConnectWalletForm username={auth.user ? auth.user.username : "Guest"} />
  );
};

export default ConnectWallet;
