function Address() {
	return (
		<>
			<div className="panel panel-default">
				
			</div>
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Contact
                                            and Billing Information</a>
					</h4>
				</div>
				<div id="collapseTwo" className="panel-collapse ">
					<div className="panel-body">
						<b>Help us keep your account safe and secure, please verify your billing
                                            information.</b>
						<br /><br />
						<table className="table table-striped" style={{ fontWeight: "bold" }}>
							<tr>
								<td style={{ width: "175px" }}>
									<label for="id_email">Best Email:</label></td>
								<td>
									<input className="form-control" id="id_email" name="email"
										required="required" type="text" />
								</td>
							</tr>
							<tr>
								<td style={{ width: "175px" }}>
									<label for="id_first_name">First name:</label></td>
								<td>
									<input className="form-control" id="id_first_name" name="first_name"
										required="required" type="text" />
								</td>
							</tr>
							<tr>
								<td style={{ width: "175px" }}>
									<label for="id_last_name">Last name:</label></td>
								<td>
									<input className="form-control" id="id_last_name" name="last_name"
										required="required" type="text" />
								</td>
							</tr>
							<tr>
								<td style={{ width: "175px" }}>
									<label for="id_address_line_1">Address:</label></td>
								<td>
									<input className="form-control" id="id_address_line_1"
										name="address_line_1" required="required" type="text" />
								</td>
							</tr>
							<tr>
								<td style={{ width: "175px" }}>
									<label for="id_address_line_2">Unit / Suite #:</label></td>
								<td>
									<input className="form-control" id="id_address_line_2"
										name="address_line_2" type="text" />
								</td>
							</tr>
							<tr>
								<td style={{ width: "175px" }}>
									<label for="id_city">City:</label></td>
								<td>
									<input className="form-control" id="id_city" name="city"
										required="required" type="text" />
								</td>
							</tr>
							<tr>
								<td style={{ width: "175px" }}>
									<label for="id_state">State:</label></td>
								<td>
									<select className="form-control" id="id_state" name="state">
										<option value="AK">Alaska</option>
										<option value="AL">Alabama</option>
										<option value="AZ">Arizona</option>
										<option value="AR">Arkansas</option>
										<option value="CA">California</option>
										<option value="CO">Colorado</option>
										<option value="CT">Connecticut</option>
										<option value="DE">Delaware</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="HI">Hawaii</option>
										<option value="ID">Idaho</option>
										<option value="IL">Illinois</option>
										<option value="IN">Indiana</option>
										<option value="IA">Iowa</option>
										<option value="KS">Kansas</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="ME">Maine</option>
										<option value="MD">Maryland</option>
										<option value="MA">Massachusetts</option>
										<option value="MI">Michigan</option>
										<option value="MN">Minnesota</option>
										<option value="MS">Mississippi</option>
										<option value="MO">Missouri</option>
										<option value="MT">Montana</option>
										<option value="NE">Nebraska</option>
										<option value="NV">Nevada</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NM">New Mexico</option>
										<option value="NY">New York</option>
										<option value="NC">North Carolina</option>
										<option value="ND">North Dakota</option>
										<option value="OH">Ohio</option>
										<option value="OK">Oklahoma</option>
										<option value="OR">Oregon</option>
										<option value="PA">Pennsylvania</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="SD">South Dakota</option>
										<option value="TN">Tennessee</option>
										<option value="TX">Texas</option>
										<option value="UT">Utah</option>
										<option value="VT">Vermont</option>
										<option value="VA">Virginia</option>
										<option value="WA">Washington</option>
										<option value="DC">Washington D.C.</option>
										<option value="WV">West Virginia</option>
										<option value="WI">Wisconsin</option>
										<option value="WY">Wyoming</option>
									</select>
								</td>
							</tr>
							<tr>
								<td style={{ width: "175px" }}>
									<label for="id_postalcode">Postalcode:</label></td>
								<td>
									<input className="form-control" id="id_postalcode" name="postalcode"
										required="required" type="text" />
								</td>
							</tr>
							<tr>
								<td style={{ width: "175px" }}>
									<label for="id_phone">Phone:</label></td>
								<td>
									<input className="form-control" id="id_phone" name="phone" type="text" />
								</td>
							</tr>

						</table>
					</div>
				</div>
			</div>
			</>
	)

}

export default Address