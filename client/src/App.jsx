import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Background } from "./components";
import { ConnectWallet, Signup, WriteReview } from "./pages";
import Account from "./pages/Account/Account";
import Feed from "./pages/Feed/Feed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Background />}>
          <Route path="login" element={<Login />} />
          <Route path="connect-wallet" element={<ConnectWallet />} />
          <Route path="signup" element=<Signup /> />
          <Route index element={<Login />} />
        </Route>
        <Route path="/account" element={<Account />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/write-review" element={<WriteReview />} />
      </Routes>
    </Router>
  );
};

export default App;
