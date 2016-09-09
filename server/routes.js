'use strict';
let 
  
  router = require('koa-router')(),
  koaBody = require('koa-body')(),
  mdwrs = require('./middlewares');

module.exports = function(app) {

  //Return list of todos
  router.get('/api/todos', mdwrs.getAll);

  //Fetch todo by Id
  router.get('/api/todos/:id', mdwrs.getById);

  // create todo and send back all todos after creation
  router.post('/api/todos', koaBody, mdwrs.create);

  // update todo
  router.put('/api/todos/:id', koaBody, mdwrs.update);

  // delete  todo
  router.del('/api/todos/:id', mdwrs.deleteById);

  // Clear completed todos
  router.post('/api/todos/clear', koaBody, mdwrs.clearCompleted);

  // Redirect to main page from all routes
  router.redirect('/*', '/');
  app.use(router.routes());
};
