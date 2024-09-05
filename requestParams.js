// SERVER WITH EXPRESS
const express = require("express");

// servidor app
const app = express();

// middlewares

// routing / routes

//params
app.get("/hello/:username", (req, res) => {
  console.log(req.params.username);
  res.send(`Hello ${req.params.username.toUpperCase()}`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`result: ${Number(x) + Number(y)}
        `);
});

const PORT = 3000;

app.listen(PORT, () => {
  return console.log(`server running on port ${PORT}`);
});
