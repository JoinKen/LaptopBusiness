var mysql = require("./node_modules/mysql");

const config = {
  host: "localhost",
  user: "root",
  port: "3306",
  password: "123456",
  database: 'laptopbusiness'
};

const connection = mysql.createConnection(config);
console.log("IT1006", connection);

module.exports = connection;