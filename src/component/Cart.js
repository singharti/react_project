import {Link, withRouter} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import '../cart.css';
import Cake from "./Cake";
import {connect} from "react-redux";
import CartList from './CartList.js';
import {emptyCartMiddleware} from "../reduxstore/middlewares";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Cart = (props) => {
    const [cakes, getCakes] = useState([]);
    let totalPrice = 0

    useEffect(() => {
        axios({
            url: process.env.REACT_APP_API_BASE_URL +'/cakecart',
            method: 'post'
        }).then(res => {
            if (res.data !== 'Session Expired') {
                const cakeList = res.data.data
                getCakes(cakeList);
                props.dispatch({
                    type: "SHOW_CART",
                    payload: {
                        data: cakeList
                    }
                })
            } else {
                props.history.push('/login')
            }
        }, err => {
            console.log('error')
        })
    }, [])

    const emptyCart = () => {
        props.dispatch(emptyCartMiddleware())
    }


  return (
    
    <div className="container bg-white rounded-top mt-5" id="zero-pad">
       {/* <div className="container" style={{marginTop: "100px"}}>
            <h1>Cart Listing</h1>
            <button className="btn btn-warning" onClick={emptyCart}>
                                <span>
                                    <FontAwesomeIcon icon="trash"/>
                                </span>
            </button> */}
            {/* <div className="row">
                {
                    cakes.map((each, index) => {
                        totalPrice += each.price
                        return (
                            <Cake data={each} key={index} page="cart"/>
                        )
                    })
                }
            </div> */}
           
        {/* </div> */}
      <div className="row d-flex justify-content-center">
        <div className="col-lg-10 col-12 pt-3">
  
          <div className="d-flex flex-column pt-4">
            <div>
              <h5 className="text-uppercase font-weight-normal">shopping bag</h5>
            </div>
            {/* <div className="font-weight-normal">2 items</div> */}
          </div>
          <div className="d-flex flex-row px-lg-5 mx-lg-5 mobile" id="heading">
            <div className="px-lg-4 mr-lg-4" id="produc">PRODUCTS</div>
            <div className="px-lg-4 ml-lg-4" id="prc">PRICE</div>
            <div className="px-lg-4 ml-lg-4" id="quantity">QUANTITY</div>
            <div className="px-lg-4 ml-lg-4" id="total">TOTAL</div>
 
          </div>
          {
                    cakes.map((each, index) => {
                        totalPrice += each.price
                        return (
                            <CartList data={each} key={index} page="cart"/>
                        )
                    })
                }
          
          
        </div>
      </div>
      <div className="container bg-light rounded-bottom py-4" id="zero-pad">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div> <button className="btn btn-sm bg-light border border-dark">GO BACK</button> </div>
              <div className="px-md-0 px-1" id="footer-font"> <b className="pl-md-4">SUBTOTAL<span className="pl-md-4">Rs. {totalPrice}/-</span></b> </div>
              <div> <Link to="/checkout" > <a className="btn btn-sm bg-dark text-white px-lg-5 px-3">CONTINUE</a> </Link> </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default connect() (withRouter(Cart))





