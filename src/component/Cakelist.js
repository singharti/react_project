
import Cake from './Cake';
import axios from 'axios';
import { useEffect, useState } from "react"

function Cakelist() {
	var [cakes, setCakes] = useState([]);
	var [isloading, setLoading] = useState(true);

	useEffect(() => {
		axios({ method: "get", url: process.env.REACT_APP_API_BASE_URL+ '/allcakes', data: JSON }).then((response) => {
			setCakes(response.data.data);
			setLoading(false);
		}, (error) => {
		
			setLoading(false);
		})

	}, []);
	return (
		<div className="container">
			<div className="row">

				{cakes.map((each, index) => {
					return (<Cake data={each} key={index} />)
				})}
				{isloading && <h1>Loading.....</h1>}
			</div>
		</div >
	)

}

export default Cakelist;

