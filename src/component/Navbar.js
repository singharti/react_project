import { useState, useEffect } from "react"
import { Link, withRouter } from "react-router-dom"
import axios from 'axios';
import Cakelist from './Cakelist.js';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let Navbar = (prop) => {

	var [isloggedin, setUser] = useState()
	useEffect(() => {
		setUser(prop.isloggedin)
	},
		[prop.isloggedin],
	);
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

				prop.history.push({
					pathname: '/search',
					search: '?q=' + searchstring,
					state: response.data
				});
			}, (error) => {
				console.log(error);

			});
			// prop.history.push('/search?q=' + searchstring);
		}

	}
	let searchTest = (event) => {
		event.preventDefault();
		searchstring = event.target.value;
		console.log(searchstring);
	}

	let logout = () => {
		// console.log("in logout");
		setUser(false);
		localStorage.clear();
		//prop.isloggedin = false;
		console.log(" In logout", isloggedin);
	}


	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">

			<Link to="/"><a className="navbar-brand" >
			<img style={{ width: "2rem", margin: " 0% 4% 0% 0%" }} src="/logo.png" className="card-img-top text-center" alt="" />
				{prop.details.projectname}</a>
			</Link>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link to="/"><a className="nav-link">{prop.details.home} </a></Link>
					</li>
					<li className="nav-item">
						<Link to="/about"><a className="nav-link" >{prop.details.about}</a></Link>
					</li>
					<li className="nav-item">
						
						<Link to="/product"><a className="nav-link" >{prop.details.cake}</a></Link>
					</li>
					<li className="nav-item">
						<Link to="/"><a className="nav-link" href="#">{prop.details.contact}</a></Link>
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

				<Link to="/login"><a className="my-2 mr-sm-2"> Log In  </a></Link>
				{isloggedin && <button className="btn btn-outline-success" onClick={logout}>Logout</button>}
			</div>
		</nav>
	);


}

export default withRouter(Navbar);

// export default connect ((state,props)=>{
// 	return{
// 		details.projectname.state.AuthReducer.user
// 	}
// })