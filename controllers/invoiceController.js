/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const db = require('../models');

var isAuthenticated = require("../config/middleware/isAuthenticated");


router.get("/", function(req, res) {
   // If the user already has an account send them to the members page
   if (req.user) {
     res.redirect('/home');
   }
   res.render('registration');
 });

router.get("/login", function(req, res) {
   // If the user already has an account send them to the members page
   if (req.user) {
     res.redirect('/home');
   }
   res.render('/login');
 });

router.get('/home', isAuthenticated, function(req, res) {
//DO NOT TOUCH THIS!!!!
  db.Projects.findAll({}).then(function(dbProject) {
    res.render('home', {
      projects: dbProject
    });
  });
 });

 router.post("/home", isAuthenticated, function(req, res) {
   let {project_name,description,due_date,hourly_rate,client_name,client_address,client_email,client_phone,notes}= req.body;
   db.Projects.create({
     project_name: project_name,
     description: description,
     due_date: due_date,
     hourly_rate: hourly_rate,
     client_name: client_name,
     client_address: client_address,
     client_email: client_email,
     client_phone: client_phone,
     notes: notes
   }).then(function(dbProject) {
     res.redirect("/home");
   });
 });





module.exports = router;
