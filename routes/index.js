// const { Router } = require("express");
// const appRoute = Router();
const session = require("./session");
const user = require("./user");
const message = require("./message");

module.exports = {
  session,
  user,
  message,
};
