
import React, { useState } from "react";
import { medicalData } from "./medicalData";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const lowerQuery = query.toLowerCase();
    const filtered = medicalData.filter((item) =>
      item.symptoms.some((symptom) =>
        symptom.toLowerCase().includes(lowerQuery)
      )
    );
    setResults(filtered);
  };

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Medical Condition Finder</h1>
      <input
        type="text"
        placeholder="Enter a symptom..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleSearch} style={{ padding: "0.5rem 1rem" }}>
        Search
      </button>

      {results.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          {results.map((item, idx) => (
            <div key={idx} style={{ marginBottom: "2rem" }}>
              <h2>{item.condition}</h2>
              <p><strong>Symptoms:</strong> {item.symptoms.join(", ")}</p>
              <p><strong>Precautions:</strong> {item.precautions.join(", ")}</p>
              <p><strong>Cure:</strong> {item.cure}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
