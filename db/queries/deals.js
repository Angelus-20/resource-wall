const db = require("../connection");

const getDeals = () => {
  return db.query("SELECT * FROM deals;").then((data) => {
    return data.rows;
  });
};

const getAllDeals = () => {
  return db
    .query(
      "   SELECT users.name, deals.title, deals.description,  deals.URL, COUNT(likes) as likes, AVG(postRatings.rating) as ratings FROM deals JOIN users ON user_id = users.id JOIN likes ON deal_id = deals.id JOIN comments ON comments.deal_id = deals.id JOIN postRatings on postRatings.deal_id = deals.id GROUP BY users.id, deals.title, deals.description, deals.URL; "
    )
    .then((data) => {
      return data.rows;
    });
};

// const getDetailedDeals = () => {
//   const query = `
//    "Select deals.id, deals.title, deals.description, deals.url, COUNT(likes.) as likes from deals left join likes on deals.id = likes.id"
//   `;

//   return db.query(query).then((data) => {
//     return data.rows;
//   });
// };

module.exports = { getDeals, getAllDeals };

// SELECT users.name, deals.title, deals.description,  deals.URL, COUNT(likes.*) as likes, AVG(postRatings.rating) as ratings
// FROM deals
// JOIN users ON user_id = users.id
// JOIN likes ON deal_id = deals.id
// JOIN comments ON comments.deal_id = deals.id
// JOIN postRatings on postRatings.deal_id = deals.id
// GROUP BY users.id, deals.title, deals.description, deals.URL;
