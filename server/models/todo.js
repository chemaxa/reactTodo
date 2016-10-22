'use strict';
let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;
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
module.exports = {
  model: mongoose.model('Todo', todoSchema),
  schema: todoSchema
}

