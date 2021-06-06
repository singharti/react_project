import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function CakeDetails(props) {

	var params = useParams();
	var [cakeData, setCakeDetails] = useState([]);
	var [isloading, setLoading] = useState(true);
	console.log(cakeData)
	useEffect(() => {
		axios({
			url: 'https://apibyashu.herokuapp.com/api/cake/' + params.cakeid,
			method: 'get',
			data: JSON
		}
		).then((response) => {
			//console.log(response.data.data);
			setCakeDetails(response.data.data);
			setLoading(false);
		}, (error) => {
			setLoading(false);
		});
	}, []);

	var isDataAvailble = cakeData ? true : false;
	return (

		<div>
			{isloading && <h1>Loading.....</h1>}

			{isDataAvailble && <h1 className="text-center">{cakeData.name}</h1> &&
				isDataAvailble &&
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<img style={{ height: "15rem" }} src={cakeData.image ? cakeData.image : "No_picture_available.png"} className="card-img-top" alt="" />
						</div>
						<div className="col-md-9">
							<p> Name : {cakeData.name} </p>
							<p> Price : {cakeData.price} </p>
							<p> Weight : {cakeData.weight} </p>
							<p> Flavour : {cakeData.flavour} </p>
							<p> Description : {cakeData.description} </p>
						</div>

					</div>
				</div>}
			{!isDataAvailble && <h1 className="text-center m-5">No data found for {params.cakeid}</h1>}
		</div>
	)
}

export default CakeDetails;