const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    cart: ObjectId // Current
});

module.exports = mongoose.model("UserSchema", UserSchema);