'use strict';
let mongoose = require('mongoose'),
    todoSchema = require('./todo.js').schema,

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
  todos: [todoSchema]
});
module.exports = mongoose.model('User', userSchema);
