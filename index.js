const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const chef = require("./chef.json");
const recipes = require("./Recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});
app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = chef.find((n) => n.id === parseInt(id));
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
