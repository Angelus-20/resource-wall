const db = require("../connection");

const getDeals = () => {
  return db.query("SELECT * FROM deals;").then((data) => {
    return data.rows;
  });
};

const getDetailedDeals = () => {
  const query = `
    SELECT users.name, deals.title, deals.description, deals.date_added, deals.URL, COUNT(likes.id) as likes_count, AVG(ratings.rating_value) as average_rating
    FROM deals
    JOIN users ON deals.user_id = users.id
    LEFT JOIN likes ON deals.id = likes.deal_id
    LEFT JOIN ratings ON deals.id = ratings.deal_id
    GROUP BY users.name, deals.title, deals.description, deals.date_added, deals.URL;
  `;

  return db.query(query).then((data) => {
    return data.rows;
  });
};

module.exports = { getDeals, getDetailedDeals };
