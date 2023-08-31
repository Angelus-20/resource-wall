const express = require("express");
const router = express.Router();
const dealsQueries = require("../db/queries/deals");

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



router.get("/searchRender", (req, res) => {
  res.render("searchRender");
  // dealsQueries
  //   .getDealByDescription()
  //   .then((searchDealsData) => {
  //   })
  //   .catch((err) => {
  //     res.status(500).json({ error: err.message });
  //   });
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



module.exports = router;


// INSERT INTO deals (title, description, date_added, URL, user_id) VALUES




// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }