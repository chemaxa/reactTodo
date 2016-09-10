'use strict';
let Todo = require('./models/todo'),
    User = require('./models/user.js'),
    logger = require('koa-logger');

const todoController = {
  getAll: function*() {
    this.body = yield Todo.find({});
  },
  getById:function*() {
    try {
      this.body = yield Todo.find({
        _id: this.params.id.split(',')
      });
    } catch (e) {
      this.body = e.message;
    }
  },
  create: function*() {
    let todo = new Todo({
      name: this.request.body.name,
      text: this.request.body.text,
      completed: this.request.body.completed,
      date: this.request.body.date
    });

    try {
      yield todo.save();
      this.body = yield Todo.find({});
    } catch (e) {
      console.log('Error: ', e);
      this.body = e.message;
    }
  },
  update: function*() {
    console.log('This: ', this.params.id);
    console.log(this.request.body);
    try {
      let todo = yield Todo.update({
        _id: this.params.id
      }, {
        name: this.request.body.name,
        text: this.request.body.text,
        completed: this.request.body.completed,
        date: this.request.body.date
      });
      this.body = yield Todo.find({});
    } catch (e) {
      this.body = e.message;
    }
  },
  deleteById: function*() {
    try {
      let todo = yield Todo.remove({
        _id: {
          $in: this.params.id.split(',')
        }
      });
      //Return new todolist
      this.body = yield Todo.find({});
    } catch (e) {
      this.body = e.message;
    }
  },
  clearCompleted: function*() {
    
    let notes = this.request.body;
    let ids = notes.map(item => item._id);

    try {
      let todo = yield Todo.remove({
        _id: {
          $in: ids
        }
      });
      //Return new todolist
      this.body = yield Todo.find({});
    } catch (e) {
      this.body = e.message;
    }
  }
}

module.exports = todoController;