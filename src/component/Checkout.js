import { Link, Route, Redirect } from "react-router-dom"
import React from "react"
import Summary from "./Summary"
import Address from "./Address"
import Confirm from "./Confirm"

function Checkout() {
	return (
		<div>
			<div className="mt-4 container" style={{ fontFamily: "URW Chancery L, cursive" }}>
				<div className="row">
					<div className="col-12">
					<h2 style={{ textAlign: "center" }}>
										Review Your Order & Complete Checkout
                    </h2>
					</div>
				</div>
				<div className=" bd-example bd-example-tabs">
					<div className="row checkout-row">
						<div className="col-3 bg-warning text-black">
							<div className="nav flex-column p-3 nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
								<Link to="/checkout/summary" className="text-decoration-none border p-2 text-white">Summary</Link>
								<Link to="/checkout/address" className="text-decoration-none border p-2 text-white">Address</Link>
								<Link to="/checkout/payment" className="text-decoration-none border p-2 text-white">Payment</Link>
							</div>
						</div>
						<div className="col-9   bg-light">
							<div id='mainContentWrapper'>
								<div className="col-md-8 col-md-offset-2">
									
									
									<div className="shopping_cart">
										<form className="form-horizontal" role="form" action="" method="post" id="payment-form">
											<Route exact path="/checkout" ><Redirect to="/checkout/summary" /></Route>
											<Route exact path="/checkout/summary" component={Summary} />
											<Route exact path="/checkout/address" component={Address} />
											<Route exact path="/checkout/payment" component={Confirm} />


										</form>
									</div>
								</div>
							</div>
							<div className="tab-content p-3" id="v-pills-tabContent">

								{/* <Route exact path="/checkout/confirm" component={Confirm}/> */}
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className='container'>
				<div className='row' style={{ paddingTop: "25px", paddingBottom: "25px" }}>
					<div className='col-md-12'>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Checkout;
