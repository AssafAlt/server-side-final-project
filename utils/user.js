// Assaf Alt, 207901075
// Daniel Noach, 319130480

const User = require("../models/user");

//User validation if the user does exist the function will return the user else null
const getUserById = async (userId) => {
  try {
    const user = await User.findOne({ id: userId });

    return user;
  } catch (error) {}
};

module.exports = { getUserById };
