import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//1//ici on importe toute l'application avec l'id root et on l'appel dans l'index.html
const root = ReactDOM.createRoot(document.getElementById("root")); //1
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
