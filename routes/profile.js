const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/profile");

// router.get("/", (req, res) => {
//   // res.render("/profile");
//   res.send("ok");
// });

router.get("/", (req, res) => {
  userQueries
    .getUsers()
    .then((users) => {
      console.log(users[0]);
      res.render("profile", { users });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
