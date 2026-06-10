import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// This finds the "root" div in index.html and hooks your React App into it
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);