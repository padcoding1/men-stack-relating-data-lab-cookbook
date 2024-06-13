// controllers/recipes.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');

// GET /
const findRecipes = async () => {
  let allRecipes = [];
  const manyRecipes = await Recipe.find({});
  console.log("manyrecipes:", manyRecipes);
  console.log("manyRecipes length", manyRecipes.length);
  for(let i = 0; i < manyRecipes.length; i++)
      allRecipes[i] = manyRecipes[i];
  console.log("All recipes:", allRecipes);
  return allRecipes;
};
const runQueries = async () => {
  console.log("Queries running.");
  await findRecipes();
};

router.get('/', (req, res) => {
  console.log("router recipes/index.ejs");
  try {
    
    const allRecipes = runQueries();
    console.log(allRecipes);
    res.render('recipes/index.ejs', { allRecipes: allRecipes });
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
// POST /

// router.post('/new', (req, res) => {
//   console.log("router recipes/new.ejs");
//   try {
//     res.render('recipes/new.ejs');
//   } 
//   catch (error) {
//     console.log(error);
//     res.redirect('/');
//   }
// });



router.post('/', async (req, res) => {
  try {
    console.log("router post create recipe")
    const newRecipe = new Recipe(req.body);
    newRecipe.owner = req.session.user._id
    console.log("newRecipe.owner: ", newRecipe.owner)
    console.log("newRecipe: ", newRecipe)
     newRecipe.save();
    res.render('recipes/index.ejs');
    console.log("saved");
  } catch (error) {
    // Handle errors
  }
});


module.exports = router;
