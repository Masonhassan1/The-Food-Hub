const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  usrId: String,
  likedIds: Array,
});

module.exports = mongoose.model("UserModel", UserSchema);