const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    item: String,
    message: String
})

module.exports = mongoose.model("User", UserSchema)