const db = require("../connection");
const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};


const updateProfile = (name,email,password) => {
  return db
    .query("insert into users (name, email, password) values ($1, $2, $3)", [
      name,
      email,
      password,
    ])
    .then((data) => {
      return data.rows;
    });
};


module.exports = { getUsers , updateProfile};


// query("insert into users (name, email, password) values ($2, $3, $4) where id = $1id,