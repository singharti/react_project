
import { Link } from "react-router-dom"

function CakeHome(props) {

    if (props.data) {

        return (
            <div className="cake" style={{ width: "15rem",marginLeft:"2rem" }}>
               
                <div className="card-body">
                    <img style={{ height: "10rem" }} src={props.data.image} className="card-img-top" alt=".." />

                </div>
            </div>


        )
    } else {
        return null;
    }

}

export default CakeHome;