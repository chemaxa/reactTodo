import React, {Component} from 'react';
import { Link } from 'react-router'
class Menu extends Component{
	render(){
		let {pathname} = this.props.location;
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<ul className="nav navbar-nav">
						<li className={pathname == "/" ? "active" : ""}><Link to="/">Home</Link></li>
						<li className={pathname == "/dashboard" ? "active" : ""}><Link to="/dashboard">Dashboard</Link></li>
						<li className={pathname == "/about" ? "active" : ""}><Link to="/about">About</Link></li>
					</ul>
					<button type="button"  data-toggle="modal" data-target="#loginModal" className="navbar-right btn btn-primary navbar-btn">Sign in</button>
				</div>
	    </nav>
		)
	}
}

export default Menu