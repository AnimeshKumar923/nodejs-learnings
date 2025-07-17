const db = require("../db/queries");

async function createUsernameGet(req, res) {
  // render the form
  console.log("usernames will be logged here - wip");
  res.render("addUser");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
  console.log("username to be saved: ", req.body.username);
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

async function deleteAllUsers(req, res) {
  await db.deleteAllUsers();
  res.render("deleteUsers");
  console.log("All users DELETED!");
}
module.exports = {
  getIndex,
  searchUsernameGet,
  createUsernameGet,
  createUsernamePost,
  deleteAllUsers,
};
