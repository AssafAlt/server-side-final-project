// Assaf Alt, 207901075
// Daniel Noach, 319130480
const router = require("express").Router();
const { registerUser } = require("../controllers/user");

router.post("/", registerUser);

module.exports = router;
