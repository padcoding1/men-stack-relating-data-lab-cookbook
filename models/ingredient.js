const mongoose = require("mongoose");

// SCHEMA /
const ingredientSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema)
module.exports = Ingredient;