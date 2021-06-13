function Confirm(){
	return(
	<div>
	<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<div style={{ textAlign: "center" }}><a data-toggle="collapse"
													data-parent="#accordion"
													href="#collapseThree"
													className=" btn   btn-success" id="payInfo"
													style={{ width: "100%", display: "none" }} onclick="$(this).fadeOut();  
                   document.getElementById('collapseThree').scrollIntoView()">Enter Payment Information »</a>
												</div>
											</h4>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
													<b>Payment Information</b>
												</a>
											</h4>
										</div>
										<div id="collapseThree" className="panel-collapse">
											<div className="panel-body">
												<span className='payment-errors'></span>
												<fieldset>
													<legend>What method would you like to pay with today?</legend>
													<div className="form-group">
														<label className="col-sm-3 control-label" for="card-holder-name">Name on
Card</label>
														<div className="col-sm-9">
															<input type="text" className="form-control" stripe-data="name"
																id="name-on-card" placeholder="Card Holder's Name" />
														</div>
													</div>
													<div className="form-group">
														<label className="col-sm-3 control-label" for="card-number">Card
Number</label>
														<div className="col-sm-9">
															<input type="text" className="form-control" stripe-data="number"
																id="card-number" placeholder="Debit/Credit Card Number" />
															<br></br>
															<div><img className="pull-right"
																src="https://s3.amazonaws.com/hiresnetwork/imgs/cc.png"
																style={{ maxWidth: "250px", paddingBottom: "20px" }} />
															</div>
														</div>
													</div>
													<div className="form-group">
														<label className="col-sm-3 control-label" for="expiry-month">Expiration
    Date</label>
														<div className="col-sm-9">
															<div className="row">
																<div className="col-xs-3">
																	<select className="form-control col-sm-2"
																		data-stripe="exp-month" id="card-exp-month"
																		style={{ marginLeft: "5px" }}>
																		<option>Month</option>
																		<option value="01">Jan (01)</option>
																		<option value="02">Feb (02)</option>
																		<option value="03">Mar (03)</option>
																		<option value="04">Apr (04)</option>
																		<option value="05">May (05)</option>
																		<option value="06">June (06)</option>
																		<option value="07">July (07)</option>
																		<option value="08">Aug (08)</option>
																		<option value="09">Sep (09)</option>
																		<option value="10">Oct (10)</option>
																		<option value="11">Nov (11)</option>
																		<option value="12">Dec (12)</option>
																	</select>
																</div>
																<div className="col-xs-3">
																	<select className="form-control" data-stripe="exp-year"
																		id="card-exp-year">
																		<option value="2016">2016</option>
																		<option value="2017">2017</option>
																		<option value="2018">2018</option>
																		<option value="2019">2019</option>
																		<option value="2020">2020</option>
																		<option value="2021">2021</option>
																		<option value="2022">2022</option>
																		<option value="2023">2023</option>
																		<option value="2024">2024</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
													<div className="form-group">
														<label className="col-sm-3 control-label" for="cvv">Card CVC</label>
														<div className="col-sm-3">
															<input type="text" className="form-control" stripe-data="cvc"
																id="card-cvc" placeholder="Security Code" />
														</div>
													</div>
													<div className="form-group">
														<div className="col-sm-offset-3 col-sm-9">
														</div>
													</div>

												</fieldset>
												<button type="submit" className="btn btn-success btn-lg" style={{ width: "100%" }}>Pay
												Now</button>
												<br></br>
												<div style={{ textAlign: "left" }}><br ></br>
                                            By submiting this order you are agreeing to our
											<a href="/legal/billing/">universal billing agreement</a>, and
											<a href="/legal/terms/">terms of service</a>.
                                            If you have any questions about our products or services please contact us
                                            before placing this order.
												</div>


											</div>
										</div>
									</div> 
</div>
	)
	
}

export default Confirm