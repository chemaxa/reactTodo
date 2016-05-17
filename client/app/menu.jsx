import React, {Component} from 'react';
import { Link } from 'react-router'
class Menu extends Component{
	render(){
		console.log(this.props.location)
		let {pathname} = this.props.location;
		return(
			<nav className="navbar navbar-default">
			 	<ul className="nav navbar-nav">
			 		<li className={pathname == "/" ? "active" : ""}><Link to="/">Home</Link></li>
          <li className={pathname == "/dashboard" ? "active" : ""}><Link to="/dashboard">Dashboard</Link></li>
          <li className={pathname == "/about" ? "active" : ""}><Link to="/about">About</Link></li>
        </ul>
	    </nav>
			)
	}
}

export default Menu