import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Asegúrate de que App.jsx esté en la misma carpeta que main.jsx
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
