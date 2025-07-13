const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const { messages } = require("./routes/index");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

// const hostname = "localhost";
const PORT = process.env.PORT || 4000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { messages: messages, msgId: messages.msgId });
});

app
  .get("/new", (req, res) => {
    res.render("form");
  })
  .post("/new", (req, res) => {
    messages.push({
      text: req.body.messageText,
      user: req.body.username,
      added: new Date(),
      msgId: messages.length + 1,
    });
    res.redirect("/");
  });

app.get("/message/:msgId", (req, res) => {
  const { msgId } = req.params;
  res.render("message", { msg: messages, msgId: msgId });
});

app.listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
