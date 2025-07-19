const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function insertNewMessage(username, text, date) {
  await pool.query(
    "INSERT INTO messages (username, text, date) VALUES ($1) ($2) ($3);",
    [username, text, date]
  );
}

async function getUsernameById(id) {
  const { rows } = await pool.query(
    "SELECT username FROM messages WHERE id = ($1);",
    [username]
  );
  return rows;
}

async function deleteAllData() {
  await pool.query("DROP TABLE messages");
}
module.exports = {
  getAllMessages,
  insertNewMessage,
  getUsernameById,
  deleteAllData,
};
