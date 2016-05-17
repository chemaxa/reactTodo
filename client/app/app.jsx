import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu'


class App extends Component{
	render(){
		return(
			<div className="container">
				<Menu location={this.props.location}/>
	       {this.props.children}
			</div>
		)
	}
}

export default App