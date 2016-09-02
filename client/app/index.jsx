import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import About from './about'
import Home from './home'
import Dashboard from './dashboard'
import Note from './note'
import NotFound from './notfound'

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

function onDashboardEnter(nextState, replace) {
	console.log("Enter to Dashboard");
	console.log('NextState: ',nextState)
  /*if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }*/
}


ReactDOM.render(
 <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="dashboard(/:todoId)" component={Dashboard} onEnter={onDashboardEnter}/>
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
  ,document.getElementById('App'));

