import { Component } from "react";

import { Link, withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { loginMiddleware } from "../reduxstore/middlewares";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            }
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                errors.email =
                    re.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 1
                        ? 'Password should not be empty'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(loginMiddleware(this.state))
        // this.props.text()
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container" style={{ width: '750px', margin: "0 auto" }}>
                {/* {
                    props.isLoggedIn? (<div id="loadingImage">
                        <img src="ajax-loader.gif" />
                    </div>) : ''
                } */}
                <div className="row " style={{
                    width: "100vw",
                    position: "relative",
                    marginLeft: "-50vw",
                    height: "100px",
                    marginTop: " 100px",
                    left: "50%"
                }} >

                    <div className="col-md-6 p-2 " >
                        <img src="/cake_2.jpg" className="d-block w-100 " style={{ height: "400px" }} alt="..." />
                    </div>
                    <hr></hr>
                    <div className="col-md-6">
                        <div className="container" style={{ marginTop: "100px" }}>
                            <div className="col-md-12" style={{ fontFamily: "Bradley Hand, cursive" }}><h2>Login to continue</h2></div>
                            <form className="col-md-12" onSubmit={this.handleSubmit} noValidate>
                                <div className="form-group email">
                                    <input value={this.state.email} name='email' onChange={this.handleChange} className="form-control" placeholder="Enter Email ID" />
                                    {errors.email.length > 0 &&
                                        <span className='error'>{errors.email}</span>}
                                </div>
                                <div className="form-group role">
                                    <input type="password" value={this.state.password} name='password' onChange={this.handleChange} className="form-control" placeholder="Enter Password" />
                                    {errors.password.length > 0 &&
                                        <span className='error'>{errors.password}</span>}
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                                    <button type="submit" style={{ width: " 100%" }} className="form-control btn btn-info ">Log In</button>
                                </div>
                                <br></br>

                            </form>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                            <Link to="/signup">	<a className="" style={{ float: "right" }} >Don't have an account? Sign Up</a></Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

Login = connect(function (state, props) {
    if (state.AuthReducer.isLoggedIn) {
        props.history.push('/')
    }
})(Login);

export default withRouter(Login)