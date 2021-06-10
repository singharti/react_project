import { combineReducers, createStore,applyMiddleware } from "redux"
import AuthReducer from ",/AuthReducer"
import CartReducer from "./CartReducer"



let middles=store=>next =>action =>{
    alert(JSON.stringify(store.getState()))
    next(action)
}

var reducers = combineReducers({AuthReducer,CartReducer})

let store = createStore(AuthReducer,applyMiddleware)

export default store

// store.despatch({
//     type: "LAPTOP_STOCK"
// })
// console.log(store.getStore)