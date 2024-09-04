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

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = 3000;

app.listen(PORT, () => {
  return console.log(`server running on port ${PORT}`);
});
