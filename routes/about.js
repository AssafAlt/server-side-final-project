const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    developer1: {
      first_name: "Assaf",
      last_name: "Alt",
      id: "207901075",
      email: "asafalt61@gmail.com",
    },
    developer2: {
      first_name: "Daniel Nathan",
      last_name: "Noach",
      id: "319130480",
      email: "danielnoach1412@gmail.com",
    },
  });
});

module.exports = router;
