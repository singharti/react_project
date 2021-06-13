import { Link } from "react-router-dom"
function Summary() {
	return (
		<>
			<div className="panel-group" id="accordion">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h4 className="panel-title">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" >Review
                                                Your Order</a>
						</h4>
					</div>
					<div id="collapseOne" className="panel-collapse ">
						<div className="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
							<div className="d-flex flex-row align-items-center">
								<div><img src="https://res.cloudinary.com/ashudev/image/upload/v1615898047/eszslus7yj2kuruspp7a.jpg" width="150" height="150" alt="" id="image" /></div>
								<div className="d-flex flex-column pl-md-3 pl-1">
									<div>
										<h6>Red velvet</h6>
									</div>
									{/* <div>Art.No:<span className="pl-2">091091001</span></div>
                <div>Color:<span className="pl-3">White</span></div>
                <div>Size:<span className="pl-4"> M</span></div> */}
								</div>
							</div>
							<div className="pl-md-0 pl-1"><b>$9.99</b></div>
							<div className="pl-md-0 pl-2"> <span className="fa fa-minus-square text-secondary"></span><span className="px-md-3 px-1">2</span><span className="fa fa-plus-square text-secondary"></span> </div>
							<div className="pl-md-0 pl-1"><b>$19.98</b></div>
							<div className="close">&times;</div>
						</div>
						<div className="container bg-light rounded-bottom py-4" id="zero-pad">
							<div className="row d-flex justify-content-center">
								<div className="col-lg-10 col-12">
									<div className="d-flex justify-content-between align-items-center">
										<div> <Link to="/cart" > <a className="btn btn-sm bg-light border border-dark">GO BACK</a> </Link></div>
										<div className="px-md-0 px-1" id="footer-font"> <b className="pl-md-4">SUBTOTAL<span className="pl-md-4">$61.78</span></b> </div>
										
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	)

}

export default Summary