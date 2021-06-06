import { Link } from "react-router-dom"
import style from '../App.css'
function Cake(props) {
	var cakes = props.data;
	if (props.data) {

		return (
			<div className="col-lg-3 col-md-4 zoom" style={{ width: "18rem", marginLeft: "13px" }}>
				<Link to={"/cake/" + props.data.cakeid}><img style={{ height: "200px" }} src={props.data.image ? props.data.image : "No_picture_available.png"} className="card-img-top" alt="" /> </Link>
				<div className="card-body zoom">
					<h5 className="card-title"><Link to={"/cake/"+cakes.cakeid}>{cakes.name}</Link></h5>
					<p className="price"><del></del> Price : {props.data.price} /-</p>
					<div className="text">
						<p className="buttons"><a><Link to={"/cake/"+cakes.cakeid} className="btn btn-primary">View </Link></a>
						{/* <a  className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a> */}
						</p>
					</div>

				</div>
			</div>


		)
	} else {
		return null;
	}

}

export default Cake;