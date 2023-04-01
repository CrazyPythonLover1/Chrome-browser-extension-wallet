import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
// import './wallet.css'
import App from "./App";

const container = document.createElement("div");
document.body.appendChild(container);
document.body.style.cssText = "margin:0;padding:0;border: 1px solid #ADB1F2;border-radius: 12px;box-shadow: 2px 2px 10px #cccccc;";

const root = createRoot(container);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
