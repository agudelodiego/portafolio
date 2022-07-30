import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Normalize} from "styled-normalize";
import RouteApp from "./RouteApp";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Normalize />
    <RouteApp />
  </React.StrictMode>
);