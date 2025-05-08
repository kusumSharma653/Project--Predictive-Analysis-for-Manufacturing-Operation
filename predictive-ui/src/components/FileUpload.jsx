import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPredictions([]);
    setError('');
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      setPredictions(response.data.predictions);
    } catch (err) {
      setError(err.response?.data?.error || 'Prediction failed');
    }
  };

  return (
    <div>
      <h2>Upload CSV File for Downtime Prediction</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload & Predict</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {predictions.length > 0 && (
        <div>
          <h3>Predictions:</h3>
          <table border="1">
            <thead>
              <tr>
                {Object.keys(predictions[0]).map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {predictions.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
