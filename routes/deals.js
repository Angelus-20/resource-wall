const express = require("express");
const router = express.Router();
const dealsQueries = require("../db/queries/deals");

router.get("/", (req, res) => {
  dealsQueries
    .getAllDeals()
    .then((dealsData) => {
      console.log(dealsData);
      res.render("deals", { dealsData });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/saved", (req, res) => {
  const userId = 1;
  dealsQueries
    .getSavedDeals(userId)
    .then((savedData) => {
      res.render("saved", { savedData });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


router.get("/newdeal", (req, res) => {
  return res.render("newdeal");
});
router.post("/newdeal", (req, res) => {
  const { Title, Description, URL } = req.body;

  dealsQueries
    .insertDeal(1, Title, Description, URL)
    .then(() => {
      res.redirect("/deals");
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
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
