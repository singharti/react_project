
import { Link } from "react-router-dom"

function CakeHome(props) {

    if (props.data) {

        return (
            <div className="cake" style={{ width: "15rem",marginLeft:"2rem" }}>
               
                <div class="card-body">
                    <img style={{ height: "10rem" }} src={props.data.image} class="card-img-top" alt=".." />
                    {/* <h5 class="card-title text-center"> {props.data.name}</h5> */}
                  

                </div>
            </div>


        )
    } else {
        return null;
    }

}

export default CakeHome;