const express = require("express");
const app = express();
const path = require("node:path");
const {
  getIndex,
  createUsernameGet,
  createUsernamePost,
  searchUsernameGet,
} = require("./controllers");
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
/**
 * app level Express middleware called to parse the form data into req.body.
 * we need this to get form data for further processing
 */
app.use(express.urlencoded({ extended: true }));

app
  .get("/", getIndex)
  .get("/new", createUsernameGet)
  .post("/new", createUsernamePost)
  .get("/search", searchUsernameGet);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}/`);
});
