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
import axios from "axios";
function App() {
	console.log(process.env)
	const token = localStorage.getItem('token');
    const [text, setLogin] = useState(false);

    const loggedIn = () => {
        setLogin(true);
    }

    axios.interceptors.request.use((request) => {
        request.headers["authtoken"] = localStorage.getItem('token')
        return request
    })
	
	
	// useEffect(()=>{
		
	// 	var base_api_url=process.env.REACT_APP_BASE_URL
	// 	if(token){
	// 		axios({url:base_api_url+"getuserdetails",method:"get",headers:{authtoken:token}}).then((response)=>{
	// 		if(response.data.data){
	// 			setUser(response.data.data)
	// 		}
	// 	},(error)=>{})
	// 	}else{
	// 		setUser([])
	// 	}
	// },[token])
	// function callme() {
	// 	setToken(localStorage.getItem("cltoken"));
	// }

	



	var details = { projectname: "Sprinkles Bakery", home: "Home", about: "About", cake: "Cake", contact: "Contact Us" }
	return (
		<div className="App">

			<Router>
				<Navbar  details={details}></Navbar>
				<Switch>
					<Route exact path="/"><Home /> </Route>
					<Route exact path="/signup" component={Signup}></Route>
					<Route exact path="/login"><Login text={loggedIn} /></Route>
					{/* <Route exact path="/login" component={Login} text={loggedIn}></Route> */}
					<Route exact path="/search" component={Search}></Route>
					<Route exact path="/cart"><Cart /></Route>
					<Route path="/checkout"><Checkout /></Route>
					<Route path="/about"><About /></Route>
					<Route path="/product"><Cakelist /></Route>
					<Route exact path="/logout"><Logout  /></Route>
					<Route exact path="/cake/:cakeid" component={CakeDetails}></Route>

					<Route exact path="/*" component={Pagenotfound}></Route>

				</Switch>
			</Router>


			{/*<Signup calllme={myphone}  /> */}
		</div>
	);
}

export default App;
