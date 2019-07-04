const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  usrId: String,
  recipieId: String,
  recipieThumb: String,
  recipieName: String,
});

module.exports = mongoose.model("UserModel", UserSchema);