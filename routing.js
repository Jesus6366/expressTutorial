// SERVER ONLY WITH NODE.JS

// const http = require("http");

// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const read = fs.createReadStream("./static/index.html");

//   read.pipe(res);
// });

// server.listen(3000);
// console.log(`server on port 3000`);

// SERVER WITH EXPRESS
const express = require("express");

// servidor app
const app = express();

// routing / routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/weather", (req, res) => {
  res.send("The current weather is nice");
});

// any other route that does not exist
app.use((req, res) => {
  res.status(404).send("Page not found");
});

const PORT = 3000;

app.listen(PORT, () => {
  return console.log(`server running on port ${PORT}`);
});
