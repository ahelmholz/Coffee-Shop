const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MenuSchema = new Schema({
    // Mongo assigned id
    name: String,
    description: String,
    price: Number,
    inMainMenu: Boolean, // If true then it is menu item rather than a user made order
    changableItems: [{name: String, options: [String]}], // Options for items that are change able in the drink/food 
    changeItems: [{name: String, choice: String}] // Empty if inMainMenu is true or if user does not specify any custom options
});

module.exports = mongoose.model('MenuSchema', MenuSchema);