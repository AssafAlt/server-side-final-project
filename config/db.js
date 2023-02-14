// Assaf Alt, 207901075
// Daniel Noach, 319130480

const colors = require("colors");
const mongoose = require("mongoose");
//Connecting mongoDB
const connectMongo = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(
      "mongodb+srv://elcapitan:elcapitan12@cluster0.v9dmv.mongodb.net/serverSideProject"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`Error: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectMongo;
