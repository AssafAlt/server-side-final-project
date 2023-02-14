// Assaf Alt, 207901075
// Daniel Noach, 319130480
const router = require("express").Router();
const { registerUser } = require("../controllers/user");

/*POST method for /register route, register new users using registerUser function*/
router.post("/", registerUser);

module.exports = router;
