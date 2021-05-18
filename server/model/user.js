  const mongoose = require('mongoose');
  const bcrypt = require('bcrypt');
  const jwt = require("jsonwebtoken");


  const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  });

  UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(11);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

  UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };

 

  const User = mongoose.model('User', UserSchema);
  
  module.exports = User;