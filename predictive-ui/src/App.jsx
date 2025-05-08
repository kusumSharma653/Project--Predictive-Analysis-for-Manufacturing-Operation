import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import FileUpload from "./components/FileUpload";
import Results from "./components/Results";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const { darkTheme } = useTheme();

  return (
    <div className={darkTheme ? "App dark" : "App light"}>
      <Navbar />
      <div className="container">
        <h1>Predictive Analysis for Manufacturing</h1>
        <FileUpload setResult={setResult} setLoading={setLoading} />
        {loading ? <Loader /> : result && <Results data={result} />}
      </div>
    </div>
  );
}

export default App;
