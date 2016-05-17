import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import About from './about'
import Home from './home'
import Dashboard from './dashboard'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

ReactDOM.render(
 <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="dashboard" component={Dashboard} />
    </Route>
  </Router>
  ,document.getElementById('App'));
