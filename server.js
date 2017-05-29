/*jshint esversion:6*/
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let methodOverride = require("method-override");
let exphbs = require("express-handlebars");

let app = express();
let PORT = process.env.PORT || 8080;

let db = require("./models");


app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

let loginController = require('./controllers/loginController.js');
let routes = require('./controllers/invoiceController.js');

app.use('/', routes);
app.use('/login', loginController);

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// =====================================================
//Home Page JS


  //   // Open
  // $('.collapsible').collapsible('open', 0);

  // // Close
  // $('.collapsible').collapsible('close', 0);

  // // Destroy
  // $('.collapsible').collapsible('destroy');
