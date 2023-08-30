const express = require("express");
const router = express.Router();
const dealsQueries = require("../db/queries/deals");

// router.get("/", (req, res) => {
//   dealsQueries
//     .getDeals()
//     .then((dealsData) => {
//       res.render("deals", { dealsData });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });
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

router.get("/:id", (req, res) => {
  const dealId = req.params.id;
  dealsQueries
    .getDeal(dealId)
    .then((deal) => {
      res.render("deal", { deal });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/like/:id", (req, res) => {
  const dealId = req.params.id;
  const userId = 1;
  console.log("checking");
  dealsQueries
    .likeDeal(dealId, userId)
    .then((deals) => {
      res.redirect("/deals");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
router.get("/rate/:rating/deal/:id", (req, res) => {
  const dealId = req.params.id;
  const rating = req.params.rating;
  const userId = 1;
  dealsQueries
    .rateDeal(dealId, userId, rating)
    .then((deals) => {
      res.redirect("/deals");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;

// INSERT INTO deals (title, description, date_added, URL, user_id) VALUES
