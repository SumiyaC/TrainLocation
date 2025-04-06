const axios = require("axios");

const getTrainLocations = async (req, res) => {
  try {
    const response = await axios.get("https://rata.digitraffic.fi/api/v1/train-locations");
    const trainMetadata = await axios.get("https://rata.digitraffic.fi/api/v1/trains");

    const trainInfoMap = {};
    trainMetadata.data.forEach(train => {
      trainInfoMap[train.trainNumber] = {
        type: train.trainCategory,
        origin: train.timeTableRows[0].stationShortCode,
        destination: train.timeTableRows[train.timeTableRows.length - 1].stationShortCode,
        delay: train.timeTableRows.find(row => row.type === "DEPARTURE")?.differenceInMinutes || 0,
      };
    });

    const trains = response.data.map(train => ({
      trainNumber: train.trainNumber,
      coordinates: train.location.coordinates,
      speed: train.speed,
      type: trainInfoMap[train.trainNumber]?.type || "Unknown",
      origin: trainInfoMap[train.trainNumber]?.origin || "N/A",
      destination: trainInfoMap[train.trainNumber]?.destination || "N/A",
      delay: trainInfoMap[train.trainNumber]?.delay || 0
    }));

    res.json(trains);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch train data" });
  }
};

module.exports = { getTrainLocations };