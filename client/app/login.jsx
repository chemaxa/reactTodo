import React, {Component} from 'react';
import Auth from './auth';

class Login extends Component{
	constructor(){
		super()
		this.onSubmit=this.onSubmit.bind(this);
	}
	componentDidMount(){
		$('#loginModal').modal('show');
		console.log($('#loginModal'))
	}
	onSubmit(e){
		e.preventDefault();
		let login=e.target.elements.email.value;
		let password=e.target.elements.password.value;
		console.log(password,login,Auth);
		Auth
			.checkPermissions({login,password})
			.then((data)=>{
				console.log(JSON.parse(data));
			});
	}
	render(){
		return(
			<div className="modal fade" id="loginModal" tabindex="-1" role="dialog">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 className="modal-title">Login Form</h4>
			      </div>
			      <div className="modal-body">
			        <form onSubmit={this.onSubmit} id="loginForm">
							  <div className="form-group">
							    <label for="email">Email address</label>
							    <input type="email" id="email" className="form-control" placeholder="Email" required/>
							  </div>
							  <div className="form-group">
							    <label for="password">Password</label>
							    <input type="password" id="password" className="form-control" placeholder="Password" required/>
							  </div>
							</form>
			      </div>
			      <div className="modal-footer">
			        <button type="reset" form="loginForm" className="btn btn-warning">Reset</button>
							<button type="submit" form="loginForm" className="btn btn-default">Submit</button>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default Login