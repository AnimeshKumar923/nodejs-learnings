require("dotenv").config();
const { Pool } = require("pg");
// All of the following properties should be read from environment variables

module.exports = new Pool({
  host: process.env.DB_HOSTNAME, // or wherever the db is hosted
  user: process.env.DB_USERNAME,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
