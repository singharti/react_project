import { Component } from "react";
import { useState } from "react";
import axios from 'axios';
class Signup extends Component {

	constructor(props) {
		// console.log(props);
		super(props);
		this.state = {
			likes: 0,
			name: '',
			email: '',
			password: '',
			error_msg: '',
			error_name_msg: '',
			error_password_msg: ''
		}
		console.log();
	}
	like = () => {
		this.setState({
			likes: this.state.likes + 1
		});
	}
	validation = () => {
		//console.log(this.state.email);
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var checkEmail = this.state.email;
		var userName = this.state.name;
		var password = this.state.password;
		//validation for user name
		if (userName == '' || userName == 'undefined') {
			this.setState({
				error_name_msg: "Please Enter Name Field"
			});
		} else {
			this.setState({
				error_name_msg: ""
			});
		}

		if (password == '' || password == 'undefined') {
			this.setState({
				error_password_msg: "Please Enter Password Field"
			});
		} else {
			this.setState({
				error_name_msg: ""
			});
		}
		//validation for email
		if (checkEmail == '' || checkEmail == 'undefined') {
			this.setState({
				error_msg: "Please Enter Email Field"
			});
		} else {
			if (!regex.test(checkEmail)) {
				this.setState({
					error_msg: "Invalid Email "
				});
			} else {

				this.setState({
					error_msg: ""
				});
			}
		}
		console.log(userName, password, checkEmail);
		//return false;
		if (userName != '' && password != '' && checkEmail != '') {
			axios({
				url: 'https://apibyashu.herokuapp.com/api/register',
				method: "post",
				data: { 'name': userName, 'password': password, 'email': checkEmail }
			}
			).then((response) => {
				console.log(response.data);

				this.props.history.push('/login');
			}, (error) => {
				console.log(error);

			});

		}
	}
	verifyEmail = (event) => {
		event.preventDefault();
		this.setState({
			email: event.target.value
		});
	}
	verifyName = (event) => {
		event.preventDefault();
		this.setState({
			name: event.target.value
		});
	}

	verifyPassword = (event) => {
		event.preventDefault();
		this.setState({
			password: event.target.value
		});
	}

	login = (e) => {
		e.preventDefault();
		this.props.calllme();
	}

	render() {
		return (
			<div className="container">
				

				<div className="row m-5">
					<div className="col-md-12">
						<div className="form-group">
							<label>Name</label>
							<input className="form-control mr-sm-2" type="text" placeholder="Enter Name" onChange={this.verifyName} />
							<label>{this.state.error_name_msg}</label>
						</div>
					</div>
					<div className="col-md-12">
						<div className="form-group">
							<label>Email</label>
							<input className="form-control mr-sm-2" type="text" placeholder="Enter Email" onChange={this.verifyEmail} />
							<label>{this.state.error_msg}</label>

						</div>
					</div>
					<div className="col-md-12">
						<div className="form-group">
							<label>Password</label>
							<input className="form-control mr-sm-2" type="password" placeholder="Enter Password" onChange={this.verifyPassword} />
							<label>{this.state.error_password_msg}</label>

						</div>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 text-center">
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.validation}>Submit</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Signup;