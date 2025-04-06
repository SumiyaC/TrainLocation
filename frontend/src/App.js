// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Map from "./components/Map";

// function App() {
//   const [trainData, setTrainData] = useState([]);

//   useEffect(() => {
//     const fetchTrainData = async () => {
//       const response = await axios.get("http://localhost:5000/api/trains");
//       setTrainData(response.data);
//     };

//     fetchTrainData();
//     const interval = setInterval(fetchTrainData, 30000); // Auto-update every 30 sec
//     return () => clearInterval(interval);
//   }, []);

//   return <Map trainData={trainData} />;
// }

// export default App;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Map from "./components/Map";
import "./styles.css"; // ✅ Import styles for header

function App() {
  const [trainData, setTrainData] = useState([]);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/trains");
        setTrainData(response.data);
      } catch (error) {
        console.error("Error fetching train data:", error);
      }
    };

    fetchTrainData();
    const interval = setInterval(fetchTrainData, 30000); // Auto-update every 30 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      {/* 🚆 Added a header */}
      <header className="app-header">
        <h1>🚆 Current train locations</h1>
        <p>Click on the train icons to view details like speed, delay, and route.</p>
      </header>

      {/* 🌍 Display the map */}
      <Map trainData={trainData} />
    </div>
  );
}

export default App;