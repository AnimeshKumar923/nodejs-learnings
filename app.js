const express = require("express");
const app = express();
const path = require("node:path");
const usersRouter = require("./routes/usersRouter");
const assetsPath = path.join(__dirname, "public");
const usersStorage = require("./storages/usersStorage");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
/**
 * app level Express middleware called to parse the form data into req.body.
 * we need this to get form data for further processing
 */
app.use(express.urlencoded({ extended: true }));

app.use("/", usersRouter);

// Add test users if storage is empty
if (usersStorage.getUsers().length === 0) {
  usersStorage.addUser({
    firstName: "Alice",
    lastName: "Smith",
    email: "alice@example.com",
    age: 25,
    bio: "I love coding and cats.",
  });
  usersStorage.addUser({
    firstName: "Bob",
    lastName: "Brown",
    email: "bob@example.com",
    age: 30,
    bio: "Enjoys hiking and photography.",
  });
  usersStorage.addUser({
    firstName: "Charlie",
    lastName: "Davis",
    email: "charlie@example.com",
    age: 22,
    bio: "Aspiring chef and music lover.",
  });
  usersStorage.addUser({
    firstName: "Diana",
    lastName: "Evans",
    email: "diana@example.com",
    age: 28,
    bio: "Runner, reader, and coffee enthusiast.",
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}/`);
});
