const mongoose = require("mongoose");

// SCHEMA /
const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    instructions: String,
    owner: String,
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient"}]
      
});

const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe;