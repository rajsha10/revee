import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Background } from "./components";
import { ConnectWallet } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Background />}>
          <Route path="login" element={<Login />} />
          <Route path="connect-wallet" element={<ConnectWallet />} />
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
