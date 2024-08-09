import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "../app/store.js";
import { Provider } from "react-redux";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AnonAadhaarProvider _useTestAadhaar={true}>
    <Provider store={store}>
      <App />
    </Provider>
  </AnonAadhaarProvider>
);
