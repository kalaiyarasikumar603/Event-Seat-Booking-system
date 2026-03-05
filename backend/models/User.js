const mongoose = require("../db");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model("User", UserSchema);