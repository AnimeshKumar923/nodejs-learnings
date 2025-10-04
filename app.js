const path = require("node:path");
const express = require("express");
const routes = require("./routes");
const models = require("./models");

require("dotenv").config();

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/messages", routes.message);

app.listen(3000, () => console.log("app listening on port 3000!"));
