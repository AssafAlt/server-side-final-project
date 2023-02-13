// Assaf Alt, 207901075
// Daniel Noach, 319130480
const User = require("../models/user");

const registerUser = async (req, res) => {
  const { id, first_name, last_name, birthday } = req.body;
  const user = await new User({
    id,
    first_name,
    last_name,
    birthday: new Date(birthday),
  });
  await user.save((err) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "User did not register" });
    } else {
      return res
        .status(200)
        .json({ status: true, message: "User registered successfully" });
    }
  });
};

module.exports = { registerUser };
