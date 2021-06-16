
import Cake from './Cake';
import axios from 'axios';
import { useEffect, useState } from "react"
import Footer from './Footer'
function Cakelist() {
	var details = { projectname: "Sprinkles Bakery"}
	var [cakes, setCakes] = useState([]);
	var [isloading, setLoading] = useState(true);

	useEffect(() => {
		axios({ method: "get", url: process.env.REACT_APP_API_BASE_URL + '/allcakes', data: JSON }).then((response) => {
			setCakes(response.data.data);
			setLoading(false);
		}, (error) => {

			setLoading(false);
		})

	}, []);
	return (
		<>
		<div className="container" style={{ fontFamily: "URW Chancery L, cursive" }}>
			{
				isloading ? (<div id="loadingImage">
					<img src="ajax-loader.gif" />
				</div>) : ''
			}
			{!isloading && <h2 className="text-center" >Products</h2>}
			{!isloading && <div className="row">
				<div>         </div>
				<hr />
				{cakes.map((each, index) => {
					return (<Cake data={each} key={index} />)
				})}
				
			</div>}
			
			


		</div >
		{!isloading && <Footer details={details}></Footer>}
		</>
	)

}

export default Cakelist;

