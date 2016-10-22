'use strict';
let mongoose = require('mongoose'),
    Todo = require('./todo.js'),
    ObjectId = mongoose.Schema.Types.ObjectId;
//CREATE SCHEMA FOR TEST!
let todoSchema = new mongoose.Schema({
  id: {
    type: ObjectId
  },
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  completed: {
    type: Boolean,
    required: true
  }
});

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
  todos: [todoSchema]
});
module.exports = mongoose.model('User', userSchema);
