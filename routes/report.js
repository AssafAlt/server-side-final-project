// Assaf Alt, 207901075
// Daniel Noach, 319130480

const router = require("express").Router();
const { createReport } = require("../controllers/report");

//Get report from report route using createReport function
router.get("/", createReport);

module.exports = router;
