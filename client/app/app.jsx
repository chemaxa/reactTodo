import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu'
import Login from './login'

class App extends Component{
	
	render(){
		return(
			<div className="container">
				<Menu location={this.props.location}/>
	       {this.props.children}
	      <Login/>
			</div>

		)
	}
}

export default App