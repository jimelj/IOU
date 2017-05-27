/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', function(req, res) {
  res.render('index');

//DO NOT TOUCH THIS!!!!
//   db.Projects.findAll({}).then(function(dbProject) {
//     res.send(dbProject);
//   });
 });


module.exports = router;
