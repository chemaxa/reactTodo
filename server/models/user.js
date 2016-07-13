'use strict';
let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;
let userSchema = new mongoose.Schema({
  id: {
    type: ObjectId
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },

});
module.exports = mongoose.model('User', userSchema);
