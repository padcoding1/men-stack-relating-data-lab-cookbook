// controllers/recipes.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');


router.get('/', (req, res) => {
  console.log("router recipes/index.ejs");
  try {
    res.render('recipes/index.ejs');
  } 
  catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

router.get('/new', (req, res) => {
  console.log("router recipes/new.ejs");
  try {
    res.render('recipes/new.ejs');
  } 
  catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

router.get('/edit', (req, res) => {
  console.log("router recipes/edit.ejs");
  try {
    res.render('recipes/edit.ejs');
  } 
  catch (error) {
    console.log(error);
    res.redirect('/');
  }
});
  

module.exports = router;
