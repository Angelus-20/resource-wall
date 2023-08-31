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




router.get("/comments", (req, res) => {
  res.send("test");
  
//   dealsQueries
//
//     .then((comments) => {
//       res.render("deals", { comments });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
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



router.get("/:id", (req, res) => {
  const dealId = req.params.id;
  
  // Fetch the deal
  dealsQueries.getDeal(dealId)
    .then((deal) => {
      
      // Now fetch the comments for this deal
      dealsQueries.getCommentsForDeal(dealId)
        .then((comments) => {
          
          // Render the page with both deal and its comments
          res.render("deal", { deal, comments });
          
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
      
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


router.get("/:id", (req, res) => {
  const dealId = req.params.id;
  const userId = 1;
  dealsQueries
    .makeDealComment(userId, dealId)
    .then((deals) => {
      res.redirect("deal", { deal });
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


router.post("/comment/:id", (req, res) => {
  const dealId = req.params.id;
  const userId = 1;
  const comment = req.body.comment;
  dealsQueries
    .makeDealComment(userId, dealId, comment)
    .then((commentVal) => {
      res.redirect("/deals/" + dealId);
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
