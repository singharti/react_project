import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { adminloginmiddleware } from "../reduxstore/middlewares"
function AdminLogin(props) {
    var [email, setEmail] = useState();
    var [password, setPassword] = useState();
    var [error, setError] = useState({});
    var [credentials, setCredentials] = useState();
    var [vik, setVik] = useState(false);
    //var [isLogedin, setisLogedin] = useState(props.isLogedin);
    let emailHandler = (event) => {
        setEmail(event.target.value)
    }
    let passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    let loginClickHandler = (event) => {
        event.preventDefault();
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        let error = {}
        if (!email) {
            error['email'] = 'Please enter email id'
            setError(error)
        } else if (!pattern.test(email)) {
            error["email"] = "Please enter valid email";
            setError(error)
        }
        if (!password) {
            error['password'] = 'Please enter password'
            setError(error)
        }

        let anyValidationError = Object.keys(error).length;
        if (!anyValidationError) {
            let user = {
                email: email,
                password: password
            }
            console.log('dsfsdf         ')
            props.dispatch(adminloginmiddleware(user))
            // props.dispatch(adminloginmiddleware(user))

        }

    }

    return (
        <div className="container" style={{ width: '750px', margin: "0 auto" }}>
            {
                props.isloading ? (<div id="loadingImage">
                    <img src="ajax-loader.gif" />
                </div>) : ''
            }
            <div className="row " style={{
                width: "100vw",
                position: "relative",
                marginLeft: "-50vw",
                height: "100px",
                marginTop: " 100px",
                left: "50%"
            }} >

                <div className="col-md-6 p-2 " >
                    <img src="/adminlogin.jpg" className="d-block w-100 " style={{ height: "400px" }} alt="..." />
                </div>
                <hr></hr>
                <div className="col-md-6">
                    <div className="container" style={{ marginTop: "100px" }}>
                        <div className="col-md-12" style={{ fontFamily: "Bradley Hand, cursive" }}><h2>Admin Login</h2></div>
                        <form method="post">
                            <div className="form-group">
                                
                                <input id="email" type="text" onChange={emailHandler} className="form-control" placeholder="Enter Admin Email" />
                                <p className="text-danger">{error.email ? (error.email) : ''}</p>

                            </div>
                            <div className="form-group">
                              
                                <input id="password" type="password" onChange={passwordHandler} className="form-control" placeholder="Enter Password" />
                                <p className="text-danger">{error.password ? (error.password) : ''}</p>

                            </div>
                            <p className="text-danger">{props.wrongcredentials ? props.wrongcredentials : ''}</p>
                            <div className="form-group">
                                <button type="button" onClick={loginClickHandler} className="btn btn-primary"><i className="fa fa-user-md"></i> Login</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    )
}


AdminLogin = connect(function (state, props) {
    console.log(state, props)
    if (state.AuthReducer.isLoggedIn && state.AuthReducer.isAdmin) {
        props.history.push('./admindashboard')
    }
})(AdminLogin);

export default withRouter(AdminLogin)