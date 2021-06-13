import { Link, withRouter } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import {
    addCartMiddleware,
    removeCakeFromCartMiddleware,
    removeOneCakeFromCartMiddleware
} from "../reduxstore/middlewares";

function CartList(props) {
    var cakes = props.data;
    const addOneCakeToCart = (cakeId) => {
        props.dispatch(addCartMiddleware(cakeId))
    }

    const removeOneCakeFromCart = (cakeId) => {
        props.dispatch(removeOneCakeFromCartMiddleware(cakeId))
    }

    const removeCakeFromCart = (cakeId) => {
        props.dispatch(removeCakeFromCartMiddleware(cakeId))
    }
    if (props.data) {

        return (
            <div className="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
                <div className="d-flex flex-row align-items-center">
                    <div><img src={props.data.image} width="150" height="150" alt="" id="image" /></div>
                    <div className="d-flex flex-column pl-md-3 pl-1">
                        <div>
                            <h6>{props.data.name}</h6>
                        </div>

                    </div>
                </div>
                <div className="pl-md-0 pl-1"><b>Rs {props.data.price} /-</b></div>
                <div className="pl-md-0 pl-2"> <span className="fa fa-minus-square text-secondary"></span><span className="px-md-3 px-1">{props.data.quantity}</span><span className="fa fa-plus-square text-secondary"></span> </div>
                {/* <div className="pl-md-0 pl-1"><b>{props.data.weight}</b></div> */}
                <div className="pl-md-0 pl-1 product-removal">
                    <button className="add-product" onClick={() => addOneCakeToCart(props.data)}> Add</button>
                </div>
              
                <div className="pl-md-0 pl-1 product-removal">
                    <button className="remove-product" onClick={() => removeOneCakeFromCart(props.data.cakeid)}> Remove</button>
                </div>

                { props.page === 'cart' &&

                    <div ><a className="close" onClick={() => removeCakeFromCart(props.data.cakeid)}> &times;</a></div>

                }

            </div>

        )
    } else {
        return null;
    }



}


CartList = connect(function (state, props) {
    if (state.CartReducer.removed) {
        state.CartReducer.removed = false
        window.location.reload()
    }
})(CartList)
export default withRouter(CartList)