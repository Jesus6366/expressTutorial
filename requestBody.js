// SERVER WITH EXPRESS
const express = require("express");
const cors = require("cors");

// servidor app
const app = express();

// middlewares
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routing / routes
app.post("/user", (req, res) => {
  console.log(req.body);

  res.send("new user created");
});

const PORT = 3000;

app.listen(PORT, () => {
  return console.log(`server running on port ${PORT}`);
});
