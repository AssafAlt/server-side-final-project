const { getUserById } = require("../utils/user");
const {
  yearValidator,
  monthValidator,
  dayValidator,
  monthFormat,
  dayFormat,
  dateSeeder,
} = require("../utils/cost");
const Cost = require("../models/cost");
const Category = require("../models/category");

const addExpense = async (req, res) => {
  const { user_id, description, category, sum } = req.body;
  var { year, month, day } = req.body;

  //Check if there is an user with this user_id
  const user = await getUserById(user_id);
  // If the user doesn't exist response with error
  if (!user) {
    return res.status(401).json({
      success: false,
      message: `There is no user with this ${user_id} id number`,
    });
  }

  //If the user did not send date parameters
  const currentDate = dateSeeder(year, month, day);
  if (!year) {
    year = currentDate.year;
  }
  if (!month) {
    month = currentDate.month;
  }

  if (!day) {
    day = currentDate.day;
  }

  //If user sent date parameters they need validation
  if (!yearValidator(year)) {
    return res.status(400).send({ error: "Invalid year" });
  }
  if (!monthValidator(month)) {
    return res.status(400).send({ error: "Invalid month" });
  }
  if (!dayValidator(day)) {
    return res.status(400).send({ error: "Invalid day" });
  }
  //Using day and month format that we set in utils/cost.js
  const formattedMonth = monthFormat(month);
  const formattedDay = dayFormat(day);

  try {
    // create new Cost object
    const cost = new Cost({
      description,
      year: year,
      month: formattedMonth,
      day: formattedDay,
      category: new Category({
        name: category,
      }),
      sum,
      user_id,
    });

    // add the new cost to db
    await cost.save();

    // response with 200 and the new saved cost
    return res
      .status(200)
      .json({ success: true, message: "Cost successfully added" });
  } catch (e) {
    // If there is any error during the add cost process this will response with the error came from mongo
    const errorKey = Object.keys(e.errors)[0].replace(".", " ");
    return res.status(401).json({
      success: false,
      error: errorKey,
      message: e.message,
    });
  }
};

module.exports = { addExpense };
