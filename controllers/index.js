const db = require("../db/queries");

async function indexPageGet(req, res) {
  res.render("index", { messages: messages, msgId: messages.msgId });
}

async function newMessageFormGet(req, res) {
  res.render("form");
}
async function newMessageFormPost(req, res) {
  const text = req.body.messageText;
  const username = req.body.username;
  const date = "CURRENT_TIMESTAMP";

  await db.insertNewMessage(username, text, date);
  res.redirect("/");
}

async function getUserById(req, res) {
  const { msgId } = req.params;
  const messageDetails = 0;
  res.render("message", { msg: messages, msgId: msgId });
}

async function getIndex(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.render("index");
}

async function searchUsernameGet(req, res) {
  const username = req.query.username;
  const targetUser = await db.searchUsername(username);
  res.render("searchResult", {
    title: `Search Result for '${username}'`,
    user: targetUser,
  });
  console.log(targetUser);
  console.log(typeof targetUser);
}

module.exports = {
  indexPageGet,
  newMessageFormGet,
  newMessageFormPost,
  getUserById,
};
