const db = require("../db/queries");

async function indexPageGet(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages});
}

async function newMessageFormGet(req, res) {
  res.render("form");
}
async function newMessageFormPost(req, res) {
  const text = req.body.messageText;
  const username = req.body.username;

  await db.insertNewMessage(username, text);
  res.redirect("/");
}

async function getUserById(req, res) {
  const { msgId } = req.params;
  const messageDetails = await db.getUsernameById(msgId);
  
  res.render("message", { msg: messageDetails[0] });
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
