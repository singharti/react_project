import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './component/Navbar.js';
import Signup from './component/Signup.js';
import Login from './component/Login.js'
import Home from './component/Home.js';
import Pagenotfound from './component/Pagenotfound.js'
import Cart from "./component/Cart"
import Checkout from "./component/Checkout"
import Logout from "./component/Logout"
import Search from './component/Search.js'
import CakeDetails from './component/CakeDetails.js'
import Cakelist from "./component/Cakelist.js";
import About from "./component/About.js";
function App() {
	var [login, setLogin] = useState(false)
	var [user, setUser] = useState([])
	var [token, setToken] = useState(localStorage.getItem("cltoken"))
	function callme() {
		setToken(localStorage.getItem("cltoken"));
	}

	



	var details = { projectname: "Sprinkles Bakery", home: "Home", about: "About", cake: "Cake", contact: "Contact Us" }
	return (
		<div className="App">

			<Router>
				<Navbar isloggedin={login} details={details}></Navbar>
				<Switch>
					<Route exact path="/"><Home /> </Route>
					<Route exact path="/signup" component={Signup}></Route>
					<Route exact path="/login" component={Login}></Route>
					<Route exact path="/search" component={Search}></Route>
					<Route exact path="/cart"><Cart /></Route>
					<Route path="/checkout"><Checkout /></Route>
					<Route path="/about"><About /></Route>
					<Route path="/product"><Cakelist /></Route>
					<Route exact path="/logout"><Logout parentfun={callme} /></Route>
					<Route exact path="/cake/:cakeid" component={CakeDetails}></Route>

					<Route exact path="/*" component={Pagenotfound}></Route>

				</Switch>
			</Router>


			{/*<Signup calllme={myphone}  /> */}
		</div>
	);
}

export default App;
