// SERVER WITH EXPRESS
const express = require("express");

// servidor app
const app = express();

// routing / routes
app.get("/products", (req, res) => {
  // validate data
  // query a database
  // process data
  res.send("product list ");
});

app.post("/products", (req, res) => {
  res.send("creating products... ");
});

app.put("/products", (req, res) => {
  res.send("uptading a product");
});

app.delete("/products", (req, res) => {
  res.send("deleting a product");
});

app.patch("/products", (req, res) => {
  res.send("updating a part of a product...");
});

const PORT = 3000;

app.listen(PORT, () => {
  return console.log(`server running on port ${PORT}`);
});
