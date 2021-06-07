import { Component } from "react";
import { useState } from "react";
import axios from 'axios';
import { Link, withRouter } from "react-router-dom"
class Login extends Component {

	constructor(props) {
		// console.log(props);
		super(props);
		this.state = {
			email: '',
			password: '',
			error_msg: '',
			error_password_msg: ''
		}
		console.log();
	}

	validation = () => {
		//console.log(this.state.email);
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var checkEmail = this.state.email;
		var password = this.state.password;
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
					error_msg: "Invalid Email"
				});
			} else {

				this.setState({
					error_msg: ""
				});
			}
		}

		if (password != '' && checkEmail != '') {
			axios({
				url: 'https://apibyashu.herokuapp.com/api/login',
				method: "post",
				data: { 'password': password, 'email': checkEmail }
			}
			).then((response) => {
				console.log();
				if (response.data.message)
					alert(response.data.message);
				else {
					alert("Login successfully");
					this.props.history.push('/');
				}
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
	verifyPassword = (event) => {
		event.preventDefault();
		this.setState({
			password: event.target.value
		});
	}

	render() {
		return (
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
						<img src="/cake_2.jpg" className="d-block w-100 "  style={{ height: "400px" }} alt="..." />
					</div>
					<hr></hr>
					<div className="col-md-6">
						<div className="col-md-12" style={{ fontFamily:"Bradley Hand, cursive" }}><h2>Login to continue</h2></div>
						<div className="col-md-12">
							<div className="form-group">
								<input className="form-control mr-sm-2" type="text" placeholder="Email" onChange={this.verifyEmail} />
								<label>{this.state.error_msg}</label>

							</div>
						</div>
						<div className="col-md-12">
							<div className="form-group">
								<input className="form-control mr-sm-2" type="password" placeholder="Password" onChange={this.verifyPassword} />
								<label>{this.state.error_password_msg}</label>

							</div>
						</div>

						{/* <div className="container-login100-form-btn">
							<button className="login100-form-btn">
								Login
						</button>
						</div> */}
						<div className="col-xs-12 col-sm-12 col-md-12 text-center">
							<a className="btn btn-info " style={{ width: " 100%" }} type="submit" onClick={this.validation}>LOG IN</a>
						</div>
						<br></br>
						<div className="col-xs-12 col-sm-12 col-md-12 text-center">
						<Link to="/signup">	<a className="" style={{ float: "right" }} >Don't have an account? Sign Up</a></Link>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default Login;