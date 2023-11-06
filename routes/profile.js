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
      console.log(users);
      const selectedUser = users.find((user) => user.id === 1);
      res.render("profile", { user: selectedUser });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/new", (req, res) => {
  const { name, email, password } = req.body;

  userQueries
    .updateProfile(name, email, password)
    .then(() => {
      res.redirect("/profile");
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
