import React, { useEffect, useState } from "react";
import axios from "axios";
import Map from "./components/Map";

function App() {
  const [trainData, setTrainData] = useState([]);

  useEffect(() => {
    const fetchTrainData = async () => {
      const response = await axios.get("http://localhost:5000/api/trains");
      setTrainData(response.data);
    };

    fetchTrainData();
    const interval = setInterval(fetchTrainData, 30000); // Auto-update every 30 sec
    return () => clearInterval(interval);
  }, []);

  return <Map trainData={trainData} />;
}

export default App;