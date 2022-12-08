const express = require("express");
const router = express.Router();
const { findOptimizedRoute } = require("../controller/waypoints");
router.post("/optimizedRoute", findOptimizedRoute);
module.exports = router;
