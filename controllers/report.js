const url = require("url");
const { getUserById } = require("../utils/user");
const { getReport, ReportDateValidator } = require("../utils/report");
const { monthFormat } = require("../utils/cost");
const Cost = require("../models/cost");

const createReport = async (req, res) => {
  // Get query parameters from url
  const queryObject = url.parse(req.url, true).query;
  const year = queryObject.year;
  const month = queryObject.month;
  const user_id = queryObject.user_id;
  // If any of the required parameters is missing, return an error
  if (!user_id || !year || !month) {
    res.status(400).json({ error: "There are some parameters that missing!" });
  }

  //User ID validation
  const user = await getUserById(user_id);
  if (!user) {
    res
      .status(404)
      .json({ error: `There is no user with this ${user_id} id number` });
  }

  // Check for valid month and year
  if (!ReportDateValidator(month, year)) {
    return res
      .status(400)
      .json({ error: "Your date is invalid, please check it!" });
  }

  //Using month format that we set in utils/cost.js
  const formattedMonth = monthFormat(month);
  const report = await getReport(user_id, year, formattedMonth);

  if (report) {
    // If the user made any purchase at the date was given
    return res.status(200).json(report);
  } else {
    // If the user didn't make any purchase at the date was given
    return res.status(400).json({
      message: `The user didn't made any purchase in ${formattedMonth} of ${year}.`,
    });
  }
};

module.exports = { createReport };
