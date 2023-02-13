// Assaf Alt, 207901075
// Daniel Noach, 319130480

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectMongo = require("./config/db");
const aboutRoute = require("./routes/about");
const costRoute = require("./routes/cost");
const reportRoute = require("./routes/report");
const registerRoute = require("./routes/register");

connectMongo();
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//routes
app.use("/about", aboutRoute);
app.use("/addcost", costRoute);
app.use("/report", reportRoute);
app.use("/register", registerRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`);
});
