import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";


function AdminList(props) {

    if (props.data) {

        return (
            <div >
                <div class="container">
                    <div class="row">
                        <div className="col-lg-4 left-side-product-box pb-3">
                            <img style={{ height: "15rem" }} src={props.data.image} className="border p-3" alt={props.data.image} />

                        </div>
                       
                        <div class="col-sm" >
                            <h6 style={{
                                padding: "18%"
                            }}>{props.data.name}</h6>
                        </div>
                        <div class="col-sm" >
                            <h6 style={{
                                padding: "18%"
                            }}>Rs {props.data.price} /-</h6>

                        </div>


                    </div>
                </div>



            </div>

        )
    } else {
        return null;
    }



}


AdminList = connect(function (state, props) {
    if (state.CartReducer.removed) {
        state.CartReducer.removed = false
        window.location.reload()
    }
})(AdminList)
export default withRouter(AdminList)