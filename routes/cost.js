// Assaf Alt, 207901075
// Daniel Noach, 319130480

const router = require("express").Router();
const { addExpense } = require("../controllers/cost");

router.post("/", addExpense);

module.exports = router;
