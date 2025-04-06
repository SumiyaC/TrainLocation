const express = require("express");
const { getTrainLocations } = require("../controllers/trainController");

const router = express.Router();

router.get("/", getTrainLocations);

module.exports = router;