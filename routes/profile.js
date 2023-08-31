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


router.post("/new", (req, res) => {
  const { name, email, password } = req.body;
 
  userQueries
    .updateProfile(1,name, email, password)
    .then(() => {
      res.redirect("/profile");
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
