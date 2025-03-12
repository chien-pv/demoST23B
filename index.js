const express = require("express");
var morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server started!!!");
});
