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
      console.log(data.rows);
      return data.rows;
    });
};

const getDeal = (id) => {
  return db.query("SELECT * FROM deals where id = $1;", [id]).then((data) => {
    return data.rows[0];
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

module.exports = { getDeals, getAllDeals, getDeal, likeDeal };

// SELECT users.name, deals.title, deals.description,  deals.URL, COUNT(likes.*) as likes, AVG(postRatings.rating) as ratings
// FROM deals
// JOIN users ON user_id = users.id
// JOIN likes ON deal_id = deals.id
// JOIN comments ON comments.deal_id = deals.id
// JOIN postRatings on postRatings.deal_id = deals.id
// GROUP BY users.id, deals.title, deals.description, deals.URL;

// SELECT users.name, deals.title, deals.description, deals.URL, COUNT(likes) as likes, AVG(postRatings.rating) as ratings FROM deals JOIN users ON user_id = users.id JOIN likes ON deal_id = deals.id JOIN comments ON comments.deal_id = deals.id JOIN postRatings on postRatings.deal_id = deals.id GROUP BY users.id, deals.title, deals.description, deals.URL;

// (select comments.message from comments where comments.deal_id = deals.id)
