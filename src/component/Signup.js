import { Component } from "react";
import { useState } from "react";
import axios from 'axios';
import { Link, withRouter } from "react-router-dom"
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
				url: process.env.REACT_APP_API_BASE_URL + '/register',
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
			// <div className="container">


			// 	<div className="row m-5">
			// 		<div className="col-md-12">
			// 			<div className="form-group">
			// 				<label>Name</label>
			// 				<input className="form-control mr-sm-2" type="text" placeholder="Enter Name" onChange={this.verifyName} />
			// 				<label>{this.state.error_name_msg}</label>
			// 			</div>
			// 		</div>
			// 		<div className="col-md-12">
			// 			<div className="form-group">
			// 				<label>Email</label>
			// 				<input className="form-control mr-sm-2" type="text" placeholder="Enter Email" onChange={this.verifyEmail} />
			// 				<label>{this.state.error_msg}</label>

			// 			</div>
			// 		</div>
			// 		<div className="col-md-12">
			// 			<div className="form-group">
			// 				<label>Password</label>
			// 				<input className="form-control mr-sm-2" type="password" placeholder="Enter Password" onChange={this.verifyPassword} />
			// 				<label>{this.state.error_password_msg}</label>

			// 			</div>
			// 		</div>
			// 		<div className="col-xs-12 col-sm-12 col-md-12 text-center">
			// 			<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.validation}>Submit</button>
			// 		</div>
			// 	</div>
			// </div>

			<div className="container" style={{ width: '750px', margin: "0 auto" }}>
				<div className="row " style={{
					width: "100vw",
					position: "relative",
					marginLeft: "-50vw",
					height: "100px",
					marginTop: " 100px",
					left: "50%"
				}} >

					<div className="col-md-6 p-2 " >
						<img src="/cake.jpg" className="d-block w-100 " style={{ height: "400px" }} alt="..." />
					</div>
					<hr></hr>
					<div className="col-md-6">
						<div className="col-md-12" style={{ fontFamily: "Bradley Hand, cursive" }}><h2>Create New Account</h2></div>
						<div className="col-md-12">
							<div className="form-group">

								<input className="form-control mr-sm-2" type="text" placeholder="Enter Name" onChange={this.verifyName} />
								<label>{this.state.error_name_msg}</label>

							</div>
						</div>
						<div className="col-md-12">
							<div className="form-group">
								<input className="form-control mr-sm-2" type="text" placeholder="Enter Email" onChange={this.verifyEmail} />
								<label>{this.state.error_msg}</label>
							</div>
						</div>
						<div className="col-md-12">
							<div className="form-group">
								<input className="form-control mr-sm-2" type="password" placeholder="Enter Password" onChange={this.verifyPassword} />
								<label>{this.state.error_password_msg}</label>
							</div>
						</div>

						{/* <div className="container-login100-form-btn">
			<button className="login100-form-btn">
				Login
		</button>
		</div> */}
						<div className="col-xs-12 col-sm-12 col-md-12 text-center">
							<a className="btn btn-info " style={{ width: " 100%" }} type="submit" onClick={this.validation}>SIGN UP</a>
						</div>
						<br></br>

						<div className="col-xs-12 col-sm-12 col-md-12 text-center">
							<Link to="/login">	<a className="" style={{ float: "right" }} >Already have an account? Log in</a></Link>
						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default Signup;