import { useState, useEffect } from "react"
import { Link, withRouter } from "react-router-dom"
import axios from 'axios';
import Cakelist from './Cakelist.js';
import {connect} from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let Navbar = (props) => {

	// var [isloggedin, setUser] = useState()
	// useEffect(() => {
	// 	setUser(props.isloggedin)
	// },
	// 	[props.isloggedin],
	// );
	let searchstring = '';

	let search = (event) => {
		event.preventDefault();
		//console.log(searchstring);
		// var redirectUrl = ; 
		if (searchstring !== '') {
			axios({
				url: 'https://apibyashu.herokuapp.com/api/searchcakes?q=' + searchstring,
				method: "get",
				data: JSON
			}
			).then((response) => {

				props.history.push({
					pathname: '/search',
					search: '?q=' + searchstring,
					state: response.data
				});
			}, (error) => {
				console.log(error);

			});
			// props.history.push('/search?q=' + searchstring);
		}

	}
	let searchTest = (event) => {
		event.preventDefault();
		searchstring = event.target.value;
		console.log(searchstring);
	}


    let logout = () => {
        props.dispatch({
            type: "LOGOUT",
            payload: {
                token: localStorage.getItem('token')
            }
        })
        props.history.push('/')
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            axios({
                url: process.env.REACT_APP_API_BASE_URL + '/cakecart',
                method: 'post'
            }).then(res => {
                const cakeList = res.data.data
                props.dispatch({
                    type: "SHOW_CART",
                    payload: {
                        data: cakeList
                    }
                })
            }, err => {
            })
        }
    }, [])


	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">

			<Link to="/"><a className="navbar-brand" >
			<img style={{ width: "2rem", margin: " 0% 4% 0% 0%" }} src="/logo.png" className="card-img-top text-center" alt="" />
				{props.details.projectname}</a>
			</Link>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link to="/"><a className="nav-link">{props.details.home} </a></Link>
					</li>
					<li className="nav-item">
						<Link to="/about"><a className="nav-link" >{props.details.about}</a></Link>
					</li>
					<li className="nav-item">
						
						<Link to="/product"><a className="nav-link" >{props.details.cake}</a></Link>
					</li>
					<li className="nav-item">
						<Link to="/"><a className="nav-link" href="#">{props.details.contact}</a></Link>
					</li>
				</ul>
				<form className="form-inline col-lg-6">
					{/* <input className="form-control mr-sm-2 col-md-9" type="search" placeholder="Search" aria-label="Search" onChange={searchInput} />

					<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={search}>Search</button> */}
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={searchTest} />
					{searchstring}
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={search}>Search</button>

				</form>
				{/* {!isloggedin && <Link to="/signup"><a><a className="my-2 mr-sm-2">Sign up  / </a></a></Link>} */}
				{props.isLoggedIn && <Link to={'/orders'} className="my-2 my-sm-0 ml-sm-1" style={{cursor : 'pointer'}}>Orders</Link>}
                {props.isLoggedIn && <button className="btn btn-outline-success" onClick={logout}>Logout</button>}
                {!props.isLoggedIn && <Link to="/login" className="my-2 mr-sm-2">Log In </Link>}
                {/* {!props.isLoggedIn && <Link to="/signup" className="my-2 my-sm-0 ml-sm-2">Sign Up</Link>} */}
                {props.isLoggedIn && <Link to="/cart" className="my-2 my-sm-0 ml-sm-2">
                    <span className="notify-badge">{props.totalItems}</span>
                    <img src={"./shopping.png"} style={{width:"16%"
					}} className="d-block" alt="Cart Logo" /> </Link> }
				 {/* <button className="btn btn-outline-success" onClick={logout}>Logout</button> */}
			</div>
		</nav>
	);


}

export default connect((state, props) => {
    console.log('state.CartReducer', state.CartReducer);
    return {
        username: state.AuthReducer.username,
        isLoggedIn: state.AuthReducer.isLoggedIn,
        totalItems: state.CartReducer.totalItems
    }
}) (withRouter(Navbar));