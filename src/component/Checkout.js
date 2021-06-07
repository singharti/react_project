import {Link,Route,Redirect} from "react-router-dom"
import React from "react"
import Summary from "./Summary"
import Address from "./Address"
import Confirm from "./Confirm"

function Checkout() {
  return (
<div className="mt-4 container" style={{ fontFamily:"URW Chancery L, cursive" }}>
<div className="row">
<div className="col-12">
<h2>Checkout</h2>
</div>
</div>
	<div className=" bd-example bd-example-tabs">
		<div className="row checkout-row">
				<div className="col-3 bg-warning text-black">
					<div className="nav flex-column p-3 nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<Link to="/checkout/order" className="text-decoration-none border p-2 text-white">Order</Link>
						<Link to="/checkout/product" className="text-decoration-none border p-2 text-white">Product</Link>
						{/* <Link to="/checkout/confirm" className="text-decoration-none border p-2 text-white">Confirm</Link> */}
					</div>
				</div>
				<div className="col-9   bg-light">
					<div className="tab-content p-3" id="v-pills-tabContent">
						<Route exact path="/checkout" ><Redirect to="/checkout/summary"/></Route>
						<Route exact path="/checkout/order" component={Summary}/>
						<Route exact path="/checkout/product" component={Address}/>
						{/* <Route exact path="/checkout/confirm" component={Confirm}/> */}
					</div>
				</div>
		</div>
	</div>
</div>
  )
}

export default Checkout;
