// Assaf Alt, 207901075
// Daniel Noach, 319130480

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: [
      "food",
      "health",
      "housing",
      "sport",
      "education",
      "transportation",
      "other",
    ],
  },
});

module.exports = mongoose.model("Category", categorySchema);
