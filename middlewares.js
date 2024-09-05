// SERVER WITH EXPRESS
const express = require("express");

// servidor app
const app = express();

// middlewares
app.use((req, res, next) => {
  console.log(`Route : ${req.url} Metodo: ${req.method}`);
  next();
});

// routing / routes
app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

const PORT = 3000;

app.listen(PORT, () => {
  return console.log(`server running on port ${PORT}`);
});
