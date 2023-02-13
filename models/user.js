const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    min: 6,
    max: 6,
    required: [true, "Please enter your Id"],
    unique: true,
  },

  first_name: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  last_name: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  birthday: { type: Date, required: [true, "Please enter your birthdate"] },
});

module.exports = new mongoose.model("User", userSchema);
