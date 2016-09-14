'use strict';
let mongoose = require('mongoose'),
    Todo = require('./todo.js'),
    ObjectId = mongoose.Schema.Types.ObjectId;

let userSchema = new mongoose.Schema({
  id: {
    type: ObjectId
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  todos: [Todo]
});
module.exports = mongoose.model('User', userSchema);