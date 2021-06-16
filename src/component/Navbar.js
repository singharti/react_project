import { useState, useEffect } from "react"
import { Link, withRouter } from "react-router-dom"
import axios from 'axios';
import Cakelist from './Cakelist.js';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faShoppingCart, faUser, faSearch } from '@fortawesome/fontawesome-free-solid'

let Navbar = (props) => {

	const [user, setUser] = useState({});
	let searchstring = '';
	let search = (event) => {
		event.preventDefault();
		if (searchstring !== '') {
			axios({
				url: process.env.REACT_APP_API_BASE_URL + '/searchcakes?q=' + searchstring,
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

		}

	}



	let searchTest = (event) => {
		event.preventDefault();
		searchstring = event.target.value;

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
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/"><a className="navbar-brand" >
					<img style={{ width: "2rem", margin: " 0% 4% 0% 0%" }} src="/logo.png" className="card-img-top text-center" alt="" />
					{props.details.projectname}</a>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<form className="form-inline col-lg-9">
						{/* <input className="form-control mr-sm-2 col-md-9" type="search" placeholder="Search" aria-label="Search" onChange={searchInput} />

 			<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={search}>Search</button> */}
						<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={searchTest} style={{ width: "80%" }} />
						{searchstring}
						<button className="btn btn-light my-2 my-sm-0" type="submit" onClick={search}><FontAwesomeIcon icon={faSearch} /></button>

					</form>
					{!props.isAdmin && <div className="col-lg-3">
						{props.isLoggedIn && <Link to="/cart" className="my-2 my-sm-0 ml-sm-2">

							<FontAwesomeIcon icon={faShoppingCart} style={{
								width: "14%",
								color: "black",
								marginLeft: '30%',
								marginTop: '6%'
							}} />
							<span className="notify-badge" style={{
								position: "absolute",
								marginLeft: "-4%",
								color: "black",
								fontSize: "smaller"
							}}>
								{props.totalItems}</span>
						</Link>}

						{props.isLoggedIn && <button className="btn btn-dark" onClick={logout} style={{
							float: " right",

						}}>	<FontAwesomeIcon icon={faUser} style={{
							float: " right",

						}}/>	Logout</button>}
						{!props.isLoggedIn && <Link to="/admin"><button className="btn btn-light">	<FontAwesomeIcon icon={faUserPlus} /></button> </Link>}

						{!props.isLoggedIn && <Link to="/signup"><button className="btn btn-light" style={{
							float: " right",

						}}>	<FontAwesomeIcon icon={faUser} /> Sign In</button> </Link>}
						{!props.isLoggedIn && <Link to="/login"><button className="btn btn-light" style={{
							float: " right",

						}}>	<FontAwesomeIcon icon={faUser} /> Log In</button> </Link>}
					</div>}

					{props.isAdmin && <div className="col-lg-3">


						{props.isLoggedIn && <button className="btn btn-dark" onClick={logout} style={{
							float: " right",

						}}>	<FontAwesomeIcon icon={faUser} />	Logout</button>}

						{!props.isLoggedIn && <Link to="/signup"><button className="btn btn-light" style={{
							float: " right",

						}}>	<FontAwesomeIcon icon={faUser} /> Sign In</button> </Link>}
						{!props.isLoggedIn && <Link to="/login"><button className="btn btn-light" style={{
							float: " right",

						}}>	<FontAwesomeIcon icon={faUser} /> Log In</button> </Link>}

					</div>}





				</div>

			</nav>
			<hr style={{ marginTop: "0rem", marginBottom: '0rem' }} />

			<nav className="navbar navbar-expand-lg navbar-light " style={{ padding: "0%", backgroundColor: "#b39099" }}>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					{!props.isAdmin && <ul className="navbar-nav mr-auto" style={{ margin: "0% 30%" }}>
						<li className="nav-item active" style={{ padding: "0% 6%" }}>
							<Link to="/"><a className="nav-link">{props.details.home} </a></Link>
						</li>
						<li className="nav-item" style={{ padding: "0% 6%" }}>
							<Link to="/about"><a className="nav-link" >{props.details.about}</a></Link>
						</li>
						<li className="nav-item" style={{ padding: "0% 6%" }}>

							<Link to="/product"><a className="nav-link" >{props.details.cake}</a></Link>
						</li>
						{props.isLoggedIn && <li className="nav-item" style={{ padding: "0% 6%" }}>

							<Link to="/orders"><a className="nav-link" >{props.details.order}</a></Link>
						</li>}
						<li className="nav-item" style={{ padding: "0% 6%" }}>
							<Link to="/"><a className="nav-link" href="#">{props.details.contact}</a></Link>
						</li>


					</ul>}
					{props.isAdmin && <ul className="navbar-nav mr-auto" style={{ margin: "0% 30%" }}>
						<li className="nav-item active" style={{ padding: "0% 6%" }}>
							<Link to="/admindashboard/cakelisting"><a className="nav-link">Cake</a></Link>
						</li>
						<li className="nav-item" style={{ padding: "0% 6%" }}>
							<Link to="/admindashboard/addcake"><a className="nav-link" >Add </a></Link>
						</li>
					</ul>
					}



					<i className="fa fa-check-circle" aria-hidden="true"></i>
					{/* {!isloggedin && <Link to="/signup"><a><a className="my-2 mr-sm-2">Sign up  / </a></a></Link>} */}
					{/* {props.isLoggedIn && <Link to={'/orders'} className="my-2 my-sm-0 ml-sm-1" style={{cursor : 'pointer'}}>Orders</Link>} */}

					{/* {!props.isLoggedIn && <Link to="/signup" className="my-2 my-sm-0 ml-sm-2">Sign Up</Link>} */}
				</div>
			</nav>
		</div>
		//
	);


}

export default connect((state, props) => {

	return {
		username: state.AuthReducer.username,
		isLoggedIn: state.AuthReducer.isLoggedIn,
		totalItems: state.CartReducer.totalItems,
		isAdmin: state.AuthReducer.isAdmin
	}
})(withRouter(Navbar));