const db = require("../connection");

const getAllDeals = () => {
  // using then to search for the data - any async operation creates a promise which uses then uses a .then to handle the response
  const databaseData = db.query("SELECT * FROM deals;").then((data) => {
    return data.rows;
  });
  return databaseData;
};

const getDealByDescription = (searchValue) => {
  return db.query('SELECT * FROM deals WHERE description LIKE $1', [searchValue]).then((data) => {
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

module.exports = { getAllDeals, getDealByDescription };

// SELECT users.name, deals.title, deals.description, deals.date_added, deals.URL, COUNT(likes.) as likes, AVG(ratings.)
// FROM deals
// JOIN users ON deal_id = deals.id
// JOIN likes ON deal_id = deals.id
// JOIN comments ON deal_id = deals.id
// JOIN users ON users.id = user_id
// GROUP BY users.id;
