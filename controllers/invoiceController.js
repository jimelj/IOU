/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', function(req, res) {

	var hi = [{

		project_name: "Test",
		description: "idk",
		due_date: "2/3/17",
		hourly_rate: "15",
		client_name: "Wonder Woman",
		client_address: "123adsd",
		client_email:"asdad"
		}]

  res.render('home', {project: hi});

//DO NOT TOUCH THIS!!!!
//   db.Projects.findAll({}).then(function(dbProject) {
//     res.send(dbProject);
//   });
 });


module.exports = router;
