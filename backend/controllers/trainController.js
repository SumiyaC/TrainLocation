const axios = require("axios");

const getTrainLocations = async (req, res) => {
  try {
    console.log("Fetching latest train location data...");
    
    // Corrected train locations endpoint
    const response = await axios.get("https://rata.digitraffic.fi/api/v1/train-locations/latest");
    
    // Fetch train metadata
    const trainMetadata = await axios.get("https://rata.digitraffic.fi/api/v1/trains");

    // Store metadata for each train
    const trainInfoMap = {};
    trainMetadata.data.forEach(train => {
      trainInfoMap[train.trainNumber] = {
        type: train.trainCategory || "Unknown",
        origin: train.timeTableRows?.[0]?.stationShortCode || "N/A",
        destination: train.timeTableRows?.[train.timeTableRows.length - 1]?.stationShortCode || "N/A",
        delay: train.timeTableRows?.find(row => row.type === "DEPARTURE")?.differenceInMinutes || 0,
      };
    });

    // Map train locations and metadata
    const trains = response.data.map(train => ({
      trainNumber: train.trainNumber,
      coordinates: train.location?.coordinates || [0, 0], // Default if missing
      speed: train.speed || 0,
      type: trainInfoMap[train.trainNumber]?.type || "Unknown",
      origin: trainInfoMap[train.trainNumber]?.origin || "N/A",
      destination: trainInfoMap[train.trainNumber]?.destination || "N/A",
      delay: trainInfoMap[train.trainNumber]?.delay || 0
    }));

    console.log("Successfully fetched train data.");
    res.json(trains);
  } catch (error) {
    console.error("Error fetching train data:", error.message);
    res.status(500).json({ error: "Failed to fetch train data" });
  }
};

module.exports = { getTrainLocations };