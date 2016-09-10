'use strict';
let 
  
  router = require('koa-router')(),
  koaBody = require('koa-body')(),
  todoController = require('./controllers/todoController');

module.exports = function(app) {

  //Return list of todos
  router.get('/api/todos', todoController.getAll);

  //Fetch todo by Id
  router.get('/api/todos/:id', todoController.getById);

  // create todo and send back all todos after creation
  router.post('/api/todos', koaBody, todoController.create);

  // update todo
  router.put('/api/todos/:id', koaBody, todoController.update);

  // delete  todo
  router.del('/api/todos/:id', todoController.deleteById);

  // Clear completed todos
  router.post('/api/todos/clear', koaBody, todoController.clearCompleted);

  // Redirect to main page from all routes
  router.redirect('/*', '/');
  app.use(router.routes());
};
