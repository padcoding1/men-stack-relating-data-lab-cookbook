// controllers/ingredients.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/ingredient.js');
const Ingredient = require('../models/ingredient.js');

router.get('/', async (req, res) => {
    console.log("router get ingredients/ingredients.ejs");
    try {
      const allIngredients = await Ingredient.find({});
      console.log(allIngredients.length);
      res.render('ingredients/index.ejs', {allIngredients});
    } 
    catch (error) {
      console.log("ERROR: get /", error);
      res.redirect('/ingredients');
    }
  });

  router.get('/new', (req, res) => {
    console.log("router get ingredients/newingredients.ejs");
    try {
      res.render('ingredients/newingredients.ejs');
    } 
    catch (error) {
      console.log("ERROR: get /new  (ingredients)", error);
      res.redirect('/ingredients');
    }
  });
  
  router.post('/', async (req, res) => {
    try{ 
      console.log("router post create ingredient")
      const newIngredient = new Ingredient(req.body);
   //   newIngredient.owner = req.session.user._id;
      newIngredient.save();
      res.redirect("/ingredients");
      console.log("saved");
      } catch (error) {
      console.log("ERROR: post / (ingredients)", error);
      res.redirect("/Ingredients");
    }
});

module.exports = router;
