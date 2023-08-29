const db = require("../connection");

const getDeals = () => {
  return db.query("SELECT * FROM deals;").then((data) => {
    return data.rows;
  });
};

const getDetailedDeals = () => {
  const query = `
   "Select deals.id, deals.title, deals.description, deals.url, COUNT(likes.) as likes from deals left join likes on deals.id = likes.id"
  `;

  return db.query(query).then((data) => {
    return data.rows;
  });
};

module.exports = { getDeals, getDetailedDeals };

// SELECT users.name, deals.title, deals.description, deals.date_added, deals.URL, COUNT(likes.) as likes, AVG(ratings.)
// FROM deals
// JOIN users ON deal_id = deals.id
// JOIN likes ON deal_id = deals.id
// JOIN comments ON deal_id = deals.id
// JOIN users ON users.id = user_id
// GROUP BY users.id;
