require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR (255),
  date TIMESTAMP
);                                

INSERT INTO messages (username, text, date) 
VALUES
  ('Bryan', 'Hi there!', CURRENT_TIMESTAMP),
  ('Odin', 'Hello from Asgard!', CURRENT_TIMESTAMP),
  ('Damon', 'Just checking in.', CURRENT_TIMESTAMP),
  ('DaDaDasse', 'What a wonderful day!', CURRENT_TIMESTAMP),
  ('Alice', 'Excited to join!', CURRENT_TIMESTAMP),
  ('Bob', 'Anyone up for a chat?', CURRENT_TIMESTAMP),
  ('Charlie', 'Learning Node.js is fun!', CURRENT_TIMESTAMP),
  ('Diana', 'Happy coding everyone!', CURRENT_TIMESTAMP);
`;

async function main() {
  console.log("seeding...");

  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOSTNAME}:${process.env.DB_PORT}/${process.env.DB}`
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
