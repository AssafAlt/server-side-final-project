const router = require("express").Router();
const { addExpense } = require("../controllers/cost");

router.post("/", addExpense);

module.exports = router;
