const mongoose = require("mongoose");

// SCHEMA /
const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    instructions: String,
    owner: { type: mongoose.Schema.Types.ObjectId, required: true},
    ingredients: [mongoose.Schema.Types.ObjectId]
});

const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe;