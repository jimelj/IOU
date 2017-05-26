/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', function(req, res) {
  // res.send('INVOICE!!!!YEAH!!!!');
  // db.burgers.findAll({}).then(function(dbBurger) {
  //     res.render("index", {
  //       burgers: dbBurger
  //     });

  db.Projects.findAll({}).then(function(dbProject) {
    res.send(dbProject);
  });
});


module.exports = router;
