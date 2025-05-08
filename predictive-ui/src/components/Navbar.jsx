import React from "react";
import "./Navbar.css";
import { useTheme } from "../ThemeContext";

function Navbar() {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-logo">PredictX</div>
      <div className="nav-controls">
        <a href="/">Home</a>
        <a href="#upload">Upload</a>
        <a href="#results">Results</a>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
