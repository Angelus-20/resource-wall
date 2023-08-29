const express = require("express");
const router = express.Router();
const dealsQueries = require("../db/queries/deals");

router.get("/", (req, res) => {
  dealsQueries
    .getDeals()
    .then((dealsData) => {
      res.render("deals", { dealsData });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
router.get("/", (req, res) => {
  dealsQueries
    .getAllDeals()
    .then((dealsData) => {
      res.render("deals", { dealsData });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;

// INSERT INTO deals (title, description, date_added, URL, user_id) VALUES
