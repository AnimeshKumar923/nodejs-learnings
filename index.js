// const { createServer } = require("node:http");
const fs = require("fs").promises;
const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

const hostname = "localhost";
const PORT = 3000;

app.get("/", (req, res) => {
  fs.readFile(__dirname + "/index.html").then((contents) => {
    res.end(contents);
  });
});
app.get("/about", (req, res) => {
  fs.readFile(__dirname + "/about.html").then((contents) => {
    res.end(contents);
  });
});
app.get("/contact", (req, res) => {
  fs.readFile(__dirname + "/contact.html").then((contents) => {
    res.end(contents);
  });
});
app.get("/{*splat}", (req, res) => {
  fs.readFile(__dirname + "/404.html").then((contents) => {
    res.end(contents);
  });
});

app.use("/authors", authorRouter);

app.use("/books", bookRouter);

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});
// const server = createServer((req, res) => {
// console.log(req.url);

//   switch (req.url) {
//     case "/":
// fs.readFile(__dirname + "/index.html").then((contents) => {
//   res.setHeader("Content-Type", "text/html");
//   res.writeHead(200);
//   res.end(contents);
// });
//       break;

//     case "/about":
//       fs.readFile(__dirname + "/about.html").then((contents) => {
//         res.setHeader("Content-Type", "text/html");
//         res.writeHead(200);
//         res.end(contents);
//       });
//     case "/contact":
//       fs.readFile(__dirname + "/contact.html").then((contents) => {
//         res.setHeader("Content-Type", "text/html");
//         res.writeHead(200);
//         res.end(contents);
//       });

//     default:
//       fs.readFile(__dirname + "/404.html").then((contents) => {
//         res.setHeader("Content-Type", "text/html");
//         res.writeHead(200);
//         res.end(contents);
//       });

//       break;
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
