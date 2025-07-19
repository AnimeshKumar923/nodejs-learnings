const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const {
  getUserById,
  newMessageFormGet,
  newMessageFormPost,
  indexPageGet,
} = require("./controllers");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", indexPageGet);
app.get("/new", newMessageFormGet);
app.post("/new", newMessageFormPost);
app.get("/message/:msgId", getUserById);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}/`);
});
