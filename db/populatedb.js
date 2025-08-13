require("dotenv").config();
const { Client } = require("pg");
const fs = require("fs");

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
    // connectionString: process.argv[2], // pass your connection URI as a argument when running this script
    connectionString: `postgresql://${process.env.AIVEN_DB_USERNAME}:${process.env.AIVEN_DB_PASSWORD}@${process.env.AIVEN_DB_HOSTNAME}:${process.env.AIVEN_DB_PORT}/${process.env.AIVEN_DB}`,
    // connectionString: `postgresql://${process.env.LOCAL_DB_USERNAME}:${process.env.LOCAL_DB_PASSWORD}@${process.env.LOCAL_DB_HOSTNAME}:${process.env.LOCAL_DB_PORT}/${process.env.LOCAL_DB}`,
    // user: process.env.AIVEN_DB_USERNAME,
    // password: process.env.AIVEN_DB_PASSWORD,
    // host: process.env.AIVEN_DB_HOSTNAME,
    // port: process.env.AIVEN_DB_PORT,
    // database: process.env.AIVEN_DB,
    ssl: {
      rejectUnauthorized: true,
      ca: fs.readFileSync("./ca.pem").toString(),
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
