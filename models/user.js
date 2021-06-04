const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    fname: String,
    lname: String,
    email: String,
    pfp: String,
    location: String // City & State or Zip
});

const User = mongoose.model("User", userSchema);

module.exports = User;