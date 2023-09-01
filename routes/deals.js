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



router.get("/searchRender", (req, res) => {
  // res.render("searchRender");
  // dealsQueries
  //   .getDealByDescription()
  //   .then((searchDealsData) => {
  //   })
  //   .catch((err) => {
  //     res.status(500).json({ error: err.message });
  //   });

  const searchString = req.query.searchTerm;
  dealsQueries
    .getDealByDescription(searchString)
    .then((dealsData) => {
      console.log(dealsData);
      res.render("searchRender", { dealsData });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


router.get("/search", (req, res) => {
  console.log("in search route");
  const searchValue = req.query.searchRenderVal;

  dealsQueries
    .getDealByDescription(searchValue)
    .then((searchDealsData) => {
      console.log(searchDealsData, "deals query response"); // .then handles the returned data
      res.json(searchDealsData); // sending the data back to the front end
    })
    .catch((err) => {
      console.log(err);
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


// /like/32
// to grab the 32 we use req.params.id
//  http://localhost:8080/deals/searchRender?searchTerm=description&foobar=true
// to grab the searchTerm we use req.query.searchTerm
// to grab the true it would be req.query.foobar
// the question mark, marks the beginning of the query object.

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
