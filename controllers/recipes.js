// controllers/recipes.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');

router.get('/', async (req, res) => {
  console.log("router recipes/index.ejs");
  try {
    res.render('recipes/index.ejs');
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
    //res.redirect('recipes/index.ejs');
  });

module.exports = router;
