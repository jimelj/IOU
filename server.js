/*jshint esversion:6*/
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let methodOverride = require("method-override");
let exphbs = require("express-handlebars");

let app = express();
let PORT = process.env.PORT || 8080;






app.use("/", routes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
