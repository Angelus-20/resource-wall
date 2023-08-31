const db = require("../connection");

const getDeals = () => {
  return db.query("SELECT * FROM deals;").then((data) => {
    return data.rows;
  });
};

const getAllDeals = () => {
  return db
    .query(
      "select deals.id, deals.title, deals.description, deals.URL, users.name, (select count (*) from likes where likes.deal_id = deals.id) as Total_Likes,(select AVG(postRatings.rating) from postRatings where postRatings.deal_id = deals.id) as Deal_Rating from deals join users on deals.user_id = users.id;"
    )
    .then((data) => {
      return data.rows;
    });
};

const getDeal = (id) => {
  return db.query("SELECT * FROM deals where id = $1;", [id]).then((data) => {
    return data.rows[0];
  });
};

const getCommentsForDeal = (dealId) => {
  return db.query("SELECT * FROM comments WHERE deal_id = $1;", [dealId]).then(data => {
    return data.rows;
  });
};


// INSERT into comments (user_id, deal_id) VALUES (1, 2);
const makeDealComment = (user_id, deal_id = 1) => {
  return db
    .query("INSERT IN comments (user_id, deal_id) values ($1, $2);", [
      user_id,
      deal_id
    ])
    .then((data) => {
      return data.rows;
    });
};


// INSERT INTO likes (user_id, deal_id) VALUES (1,1);
const likeDeal = (deal_id, user_id = 1) => {
  return db
    .query("insert into likes (deal_id, user_id) values ($1, $2);", [
      deal_id,
      user_id,
    ])
    .then((data) => {
      return data.rows;
    });
};
const rateDeal = (deal_id, user_id = 1, rating) => {
  return db
    .query(
      "insert into postRatings (deal_id, user_id, rating) values ($1, $2, $3);",
      [deal_id, user_id, rating]
    )
    .then((data) => {
      return data.rows;
    });
};

// const rateDeal = (deal_id, user_id, rating) => {
//   return db
//     .query(
//       "insert into ratings (deal_id, user_id, rating_value) values ($1, $2, $3);",
//       [deal_id, user_id, rating]
//     )
//     .then((data) => {
//       return data.rows;
//     });
// };

module.exports = { getDeals, getAllDeals, getDeal, likeDeal, rateDeal, getCommentsForDeal };

// SELECT users.name, deals.title, deals.description,  deals.URL, COUNT(likes.*) as likes, AVG(postRatings.rating) as ratings
// FROM deals
// JOIN users ON user_id = users.id
// JOIN likes ON deal_id = deals.id
// JOIN comments ON comments.deal_id = deals.id
// JOIN postRatings on postRatings.deal_id = deals.id
// GROUP BY users.id, deals.title, deals.description, deals.URL;

// SELECT users.name, deals.title, deals.description, deals.URL, COUNT(likes) as likes, AVG(postRatings.rating) as ratings FROM deals JOIN users ON user_id = users.id JOIN likes ON deal_id = deals.id JOIN comments ON comments.deal_id = deals.id JOIN postRatings on postRatings.deal_id = deals.id GROUP BY users.id, deals.title, deals.description, deals.URL;

// (select comments.message from comments where comments.deal_id = deals.id)
