const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Can't be blank"]
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "Can't be blank"]
  },
  password: {
    type: String,
    required: [true, "Can't be blank"]
  },
  picture: {
    type: String,
  },
  newMessages: {
    type: Object,
    default: {}
  },
  status: {
    type: String,
    default: 'online'
  }
}, {minimize: false});
//-------------------------------------------------
UserSchema.methods.toJSON = function() {
  
}


// ------------------------------------------------
UserSchema.statics.findByCredentials = async function(email, password) {
  const user = await User.findOne({email});
  if(!user) throw new Error('invalid email or password');

  const isMacth = await bcrypt.compare(password, user.password);
  if(!isMacth) throw new Error('Invalid email or password')
  return user
}

const User = mongoose.model('User', UserSchema);
module.exports = User;