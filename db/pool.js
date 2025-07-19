require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOSTNAME}:${process.env.DB_PORT}/${process.env.DB}`
});