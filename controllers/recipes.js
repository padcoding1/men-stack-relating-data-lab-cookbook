// controllers/recipes.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');
const Ingredient = require('../models/ingredient.js');

// GET /


router.get('/', async (req, res) => {
  console.log("router get recipes/index.ejs");
  try {
    const allRecipes = await Recipe.find({});
    console.log(allRecipes);
    res.render('recipes/index.ejs', {allRecipes});
  } 
  catch (error) {
    console.log("ERROR: get /", error);
    res.redirect('/recipes');
  }
});

router.get('/new', async (req, res) => {
  console.log("router get recipes/new.ejs");
  try {
    const allIngredients = await Ingredient.find({});
    res.render('recipes/new.ejs', {allIngredients: allIngredients});
  } 
  catch (error) {
    console.log("ERROR: get /new", error);
    res.redirect('/recipes');
  }
});


router.get('/:_id', async (req, res) => {
  try {
    
    console.log(req.params._id);
     const foundRecipe = await Recipe.findById(req.params._id);
     res.render("recipes/show.ejs", { recipe: foundRecipe });
  } catch (error) {
      console.log("ERROR (get /:id): ", error);
      res.redirect('/recipes');
  }
});

router.get('/edit/:_id', async (req, res) => {
  console.log("router get recipes/edit.ejs");
  try {
    const recipe = await Recipe.findById(req.params._id);
    res.render('recipes/edit.ejs', {recipe: recipe} );
  } 
  catch (error) {
    console.log("ERROR: get /edit", error);
    res.redirect('/');
  }
});
// POST /

router.post('/', async (req, res) => {
    try{ 
      console.log("router post create recipe")
      
      const newRecipe = new Recipe(req.body);
      newRecipe.owner = req.session.user._id;
      newRecipe.save();
      res.redirect("/recipes");
      console.log("saved");
      } catch (error) {
      console.log("ERROR: post /", error);
      res.redirect("/recipes");
    }
});
// PUT /

router.put('/edit/:_id', async function(req, res) {
  
    try {
      console.log("/:id router put recipes/edit.ejs");
      const recipe = await Recipe.findById(req.params._id);
      recipe.set(req.body);
      await recipe.save();
      
      res.render('recipes/show.ejs', {recipe: recipe} );
    }
    catch (error) {
      console.log("ERROR: put /:id", error);
      res.redirect("/recipes");
    }
  
});
// DELETE /
router.delete('/:_id', async function(req, res) {
  
    try {
        await Recipe.findByIdAndDelete(req.params._id);
        res.redirect("/recipes");
        console.log("redirecting to /recipes/")
    } catch (error) {
        console.log("ERROR: delete /:id", error);
        res.redirect("/recipes");
    }
 
});

module.exports = router;
