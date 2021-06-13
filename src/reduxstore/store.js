// import { combineReducers, createStore,applyMiddleware } from "redux"
// import AuthReducer from "./AuthReducer"
// import CartReducer from "./CartReducer"



// // let middles=store=>next =>action =>{
// //     alert(JSON.stringify(store.getState()))
// //     next(action)
// // }

// // var reducers = combineReducers({AuthReducer,CartReducer})

// let store = createStore(AuthReducer)

// export default store

// // store.despatch({
// //     type: "LAPTOP_STOCK"
// // })
// // console.log(store.getStore)

import {createStore , combineReducers , applyMiddleware} from "redux"
import AuthReducer from "./Authreducer"
import CartReducer from "./CartReducer"
import thunk from "redux-thunk"


let middle=store=>next =>action => {
    // alert(JSON.stringify(store.getState()))

    next(action)
}
var reducers = combineReducers({AuthReducer ,CartReducer})

console.log("middle is " , applyMiddleware(middle,thunk))

let store  =  createStore(reducers, applyMiddleware(middle,thunk))

export default store