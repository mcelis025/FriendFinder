const express = require('express')
const app = express();
var path = require("path");
 
app.get("/", function(req, res) {
  res.json(path.join(__dirname, "app/public/home.html"));
});
 
app.listen(3000)