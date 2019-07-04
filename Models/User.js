const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  usrId: String,
  receipeId: String,
  receipeThumb: String,
  receipeName: String,
});

module.exports = mongoose.model("UserModel", UserSchema);
