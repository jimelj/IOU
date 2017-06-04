/*jshint esversion:6*/
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let methodOverride = require("method-override");
let exphbs = require("express-handlebars");
let session = require("express-session");
let passport = require("./config/passport");

let app = express();
let PORT = process.env.PORT || 8080;

let db = require("./models");

app.use(express.static(process.cwd() + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

let loginController = require('./controllers/loginController.js');
let invoiceController = require('./controllers/invoiceController.js');

app.use('/', invoiceController);
app.use('/passport', loginController);

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("==== 🌎 🚈 🖥️ 📡===> App listening on PORT " + PORT + ' ✅');
  });
});
