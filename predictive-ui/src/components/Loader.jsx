// src/components/Loader.js
import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Processing...</p>
    </div>
  );
}

export default Loader;
