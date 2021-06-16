import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faShoppingCart, faUser, faSearch, plus, minus, trash } from '@fortawesome/fontawesome-free-solid'

import { connect } from "react-redux";
import {
    addCartMiddleware,
    removeCakeFromCartMiddleware,
    removeOneCakeFromCartMiddleware
} from "../reduxstore/middlewares";

function CheckoutList(props) {
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
            <>
                <div className="col-md-4">
                    <div><img src={props.data.image} width="150" height="150" alt="" id="image" /></div>
                   
                </div>
                <div className="col-md-3">
                    <h6>{props.data.name}</h6>
                </div>

                <div className="col-md-2"><b>Rs {props.data.price} /-</b></div>
                <div className="col-md-1"> <span className="fa fa-minus-square text-secondary"></span>
                    <span className="px-md-3 px-1">{props.data.quantity}</span>
                    <span className="fa fa-plus-square text-secondary"></span> </div>
                {/* <div className="pl-md-0 pl-1"><b>{props.data.weight}</b></div> */}


            </>


        )
    } else {
        return null;
    }



}


CheckoutList = connect(function (state, props) {
    if (state.CartReducer.removed) {
        state.CartReducer.removed = false
        window.location.reload()
    }
})(CheckoutList)
export default withRouter(CheckoutList)