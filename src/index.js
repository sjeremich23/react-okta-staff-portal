import React, { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./utils/reportWebVitals";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
