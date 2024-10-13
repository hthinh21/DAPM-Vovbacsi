const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const usermodels = mongoose.model("users", userSchema)
module.exports = usermodels