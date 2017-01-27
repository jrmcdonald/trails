const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', function preSave(next) {
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10)
      .then(salt => bcrypt.hash(this.password, salt))
      .then((hash) => {
        this.password = hash;
        next();
      }).catch(err => next(err));
  } else {
    next();
  }
});

UserSchema.methods.comparePassword = function comparePassword(password) {
  return bcrypt.compare(password, this.password);
};

mongoose.model('User', UserSchema);
