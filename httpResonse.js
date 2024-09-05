// SERVER WITH EXPRESS
const express = require("express");

// servidor app
const app = express();

// routing / routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/myfile", (req, res) => {
  res.sendFile("./README.md", { root: __dirname });
});

app.get("/user", (req, res) => {
  res.json({
    name: "jesus",
    lastname: "martha",
    age: 34,
    points: [1, 2, 3],
    adress: {
      city: "new york",
    },
  });
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

const PORT = 3000;

app.listen(PORT, () => {
  return console.log(`server running on port ${PORT}`);
});
