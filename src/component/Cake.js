import { Link } from "react-router-dom"
import style from '../App.css'
function Cake(props) {
	var cakes = props.data;
	if (props.data) {

		return (
			
			<div className="col-lg-3 col-md-4 zoom" id={props.index}>
				<Link to={"/cake/" + props.data.cakeid} style={{ width: "100%" }}><img className="card-img-top" src={props.data.image} alt="Card cap" style={{ maxHeight: "190px" }} /></Link>
				<div className="card-body">
					<h6 className="card-title"><b>Name</b> : {props.data.name}</h6>
					<p className="card-text"><b>Price </b> : {props.data.price} /-</p>
					{props.data.discount && <p className="card-text">Discount: {props.data.discount}</p>}
				</div>
			</div>


		)
	} else {
		return null;
	}

}

export default Cake;