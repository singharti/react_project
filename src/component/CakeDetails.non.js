import { useParams } from 'react-router-dom'
import { Link, useEffect, useState } from 'react'
import axios from 'axios'
import {connect} from "react-redux";
import {addCartMiddleware} from "../reduxstore/middlewares";

function CakeDetails(props) {

	var params = useParams();
	var [cakeData, setCakeDetails] = useState([]);
	var [isloading, setLoading] = useState(true);
	var [ratingWidth, setRatingWidth] = useState(0);

	var [quantity, setQty] = useState(1);
	
	useEffect(() => {
		axios({
			url: process.env.REACT_APP_API_BASE_URL + params.cakeid,
			method: 'get',
			data: JSON
		}
		).then((response) => {
		
			setCakeDetails(response.data.data);
			setLoading(false);
		}, (error) => {
			setLoading(false);
		});
	}, []);

	let addToCart = (data) => {
        props.dispatch(addCartMiddleware(data))
		
    }


	var isDataAvailble = cakeData ? true : false;
	return (

		<div>
			{isloading && <h1>Loading.....</h1>}

			{isDataAvailble && <h1 className="text-center">{cakeData.name}</h1> &&
				isDataAvailble &&
				<div className="container">

				</div>}
			{!isDataAvailble && <h1 className="text-center m-5">No data found for {params.cakeid}</h1>}

			<div className="border p-3 main-section">
				<div>
					<div className="row m-0">
						<div className="col-lg-4 left-side-product-box pb-3">
							<img style={{ height: "15rem" }} src={cakeData.image} className="border p-3" alt={cakeData.name} />
							<h2 className="m-0 p-0">{cakeData.name}</h2>
						</div>
						<div className="col-lg-8">
							<div className="right-side-pro-detail border p-3 m-0">
								<div className="row">
									<div className="col-lg-12">
										<h2 className="m-0 p-0">{cakeData.name}</h2>

									</div>
									<div className="content mt-2 mb-2 col-lg-12">
										<div className="ratings"><strong>Ratings: </strong> <span className="product-rating">{cakeData.ratings}</span><span>/5</span>
											<span className="stars"><span style={{ width: ratingWidth }}></span></span>
											{/* <span>({cakeData.reviews} reviews)</span> */}
										</div>
									</div>

									<div className="col-lg-12"><strong>Price: </strong><span className="product-rating">&#8377;{cakeData.price} /-</span>
										{/* <p className="m-0  pb-2 price-pro">&#8377;{cakeData.price} /-</p> */}
										<hr className="p-0 m-0" />
									</div>
									<div className="col-lg-12 pt-2">
										<h5>Description</h5>
										<span>{cakeData.description}</span>
										<hr className="m-0 pt-2 mt-2" />
									</div>
									<div className="col-lg-12">
										<h5>Other Details</h5>
										<span>Flavour : {cakeData.flavour} , </span>
										<span>Weight  : {cakeData.weight} / Kg, </span>
										<span>Occasion : {cakeData.type}</span>


									</div>
								</div>
								
								<div className="col-lg-12 mt-3">
									<div className="row">
										<div className="col-lg-12 pb-2">
											<a  className="btn btn-info w-100" onClick={addToCart}>Add To Cart</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			

			</div>
		</div>
		// </div>



	)
}

export default connect()(CakeDetails);