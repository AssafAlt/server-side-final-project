// Assaf Alt, 207901075
// Daniel Noach, 319130480

const Cost = require("../models/cost");
const { monthValidator, yearValidator } = require("./cost");

const categories = [
  "food",
  "health",
  "housing",
  "sport",
  "education",
  "transportation",
  "other",
];

const getReport = async (user_id, year, month) => {
  try {
    // Find costs documents that following user_id, year and month parameters
    const costs = await Cost.find({
      user_id: user_id,
      year,
      month,
    });
    // If there are no costs on this month, return a message
    if (!costs.length) {
      return {
        message: `No costs found for these parameters user_id: ${user_id}, month: ${month}, year: ${year}`,
      };
    }

    // Create a report object by grouping the costs by category
    const report = categories.reduce((result, category) => {
      result[category] = costs
        .filter((cost) => cost.category.name === category)
        .map((cost) => ({
          day: cost.day,
          description: cost.description,
          sum: cost.sum,
        }));
      return result;
    }, {});
    if (report) {
      return report;
    }
  } catch (err) {
    return err;
  }
};

const ReportDateValidator = (month, year) => {
  if (monthValidator(month) && yearValidator(year)) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  getReport,
  ReportDateValidator,
};
