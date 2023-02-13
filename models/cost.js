// Assaf Alt, 207901075
// Daniel Noach, 319130480

const mongoose = require("mongoose");
const Category = require("./category.js").schema;

const costSchema = new mongoose.Schema({
  user_id: {
    type: String,
    min: 6,
    max: 6,
    required: [true, "Please enter user Id"],
  },
  year: {
    type: String,
    min: 4,
    max: 4,
  },
  month: {
    type: String,
    min: 2,
    max: 2,
  },
  day: {
    type: String,
    min: 2,
    max: 2,
  },
  description: {
    type: String,

    required: [true, "Please enter description for your expense"],
  },
  category: {
    type: Category,
    required: [true, "Please enter category for your expense"],
  },

  sum: {
    type: Number,

    required: [true, "Please enter the cost of your expense"],
  },
});

module.exports = new mongoose.model("Cost", costSchema);
