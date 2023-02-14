// Assaf Alt, 207901075
// Daniel Noach, 319130480

const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectMongo = require("./config/db");
const aboutRoute = require("./routes/about");
const costRoute = require("./routes/cost");
const reportRoute = require("./routes/report");
const registerRoute = require("./routes/register");

const PORT = process.env.PORT || 5000;

//Connecting to mongo server
connectMongo();
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//Routes
app.use("/about", aboutRoute);
app.use("/addcost", costRoute);
app.use("/report", reportRoute);
app.use("/register", registerRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`);
});
