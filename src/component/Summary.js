

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { connect } from "react-redux";
import Cake from "./CheckoutList";
import { withRouter } from "react-router-dom";

const Summary = (props) => {
	const [disableAddressLink, setDisableAddressLink] = useState(true)
	const [cakes, getCakes] = useState([]);

	let totalPrice = 0

	const activeNextUrl = () => {
		props.history.push('/checkout/address')
		setDisableAddressLink(false)
		props.onChange(disableAddressLink)
	}

	useEffect(() => {
		axios({
			url: process.env.REACT_APP_API_BASE_URL + '/cakecart',
			method: 'post'
		}).then(res => {
			if (res.data !== 'Session Expired') {
				const cakeList = res.data.data
				getCakes(cakeList);
				props.dispatch({
					type: "SHOW_CART",
					payload: {
						data: cakeList
					}
				})
			} else {
				props.history.push('/login')
			}
		}, err => {
			console.log('error')
		})
	}, [])

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3">
					<span className="text-center m-5"><b>Image</b></span>

				</div>
				<div className="col-md-3">
					<span className="text-center m-5"><b>Name</b></span>

				</div>

				<div className="col-md-2">	<span className="text-center m-5"><b>Price</b></span>
				</div>
				<div className="col-md-4"> <span className="fa fa-minus-square text-secondary"></span>
					<span className="text-center m-5"><b>Quantity</b></span>
				</div>
				{/* <div className="pl-md-0 pl-1"><b>{props.data.weight}</b></div> */}

			</div>

			{
				cakes.map((each, index) => {
					totalPrice += each.price
					return (
						<div className="row" style={{marginTop:"50px"}}>
							<Cake data={each} key={index} page="cart_summary" />
						</div>
					)
				})
			}

			<div>
				<span style={{ float: "left" }}><b>Total Price: Rs. {totalPrice} /-</b></span>
				<button className="btn btn-primary" style={{ float: "right" }} onClick={activeNextUrl}>
					<span>Next</span>
				</button>
			</div>
		</div>
	)
}

export default connect()(withRouter(Summary))