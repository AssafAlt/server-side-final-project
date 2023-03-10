// Assaf Alt, 207901075
// Daniel Noach, 319130480

const url = require("url");
const { getUserById } = require("../utils/user");
const { getReport, ReportDateValidator } = require("../utils/report");
const { monthFormat } = require("../utils/cost");

const createReport = async (req, res) => {
  // Get query parameters from url
  const queryObject = url.parse(req.url, true).query;
  const year = queryObject.year;
  const month = queryObject.month;
  const user_id = queryObject.user_id;
  // If any of the required parameters is missing, return an error message
  if (!user_id || !year || !month) {
    return res
      .status(400)
      .json({ error: "There are some parameters that missing!" });
  }

  //User ID validation
  const user = await getUserById(user_id);
  if (!user) {
    return res
      .status(404)
      .json({ error: `There is no user with this ${user_id} id number` });
  }

  // Valid month and year query parameters
  if (!ReportDateValidator(month, year)) {
    return res
      .status(400)
      .json({ error: "Your date is invalid, please check it!" });
  }

  //Using month format that we set in utils/cost.js
  const formattedMonth = monthFormat(month);
  const report = await getReport(user_id, year, formattedMonth);

  if (report) {
    // If the user made any purchase at the given month and year, response with status and report
    return res.status(200).json(report);
  } else {
    // If the user not made any purchase at the given month and year, response with status and message
    return res.status(400).json({
      message: `User didn ot made any purchase in ${formattedMonth}/${year}.`,
    });
  }
};

module.exports = { createReport };
