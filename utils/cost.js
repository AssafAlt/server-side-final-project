//If the user does not send one of the date parameters
const dateSeeder = (year, month, day) => {
  const date = new Date();
  if (!year) {
    year = date.getFullYear();
  }
  if (!month) {
    month = date.getMonth() + 1;
  }
  if (!day) {
    day = date.getDate();
  }

  return { year, month, day };
};

// Function to determine if the date the user sent is valid

const yearValidator = (year) => {
  const yearNumber = Number(year);
  if (yearNumber < 1900) {
    return false;
  } else {
    return true;
  }
};

const monthValidator = (month) => {
  const monthNumber = Number(month);
  if (monthNumber < 0 || monthNumber > 12) {
    return false;
  } else if (monthNumber > 0 && monthNumber < 13) {
    return true;
  }
};

const dayValidator = (day) => {
  const dayNumber = Number(day);
  if (dayNumber < 0 || dayNumber > 31) {
    return false;
  } else if (dayNumber > 0 && dayNumber < 32) {
    return true;
  } else {
    return false;
  }
};

// Ensure the date is in mm/dd format

const monthFormat = (month) => {
  const monthNumber = Number(month);
  if (monthNumber > 0 && monthNumber < 10) {
    return String("0" + monthNumber);
  } else if (month.lengt === 2) {
    return month;
  }
};

const dayFormat = (day) => {
  const dayNumber = Number(day);
  if (dayNumber > 0 && dayNumber < 10) {
    return String("0" + dayNumber);
  } else if (day.length == 2) {
    return day;
  }
};

module.exports = {
  yearValidator,
  monthValidator,
  dayValidator,
  monthFormat,
  dayFormat,
  dateSeeder,
};