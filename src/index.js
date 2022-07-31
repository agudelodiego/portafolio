import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Normalize} from "styled-normalize";
import App from "./App";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>
);