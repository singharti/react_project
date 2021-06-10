var allstates = []

function CartReducer(state = {
    cart:[],
    totalprice:10,

}, action) {
    switch (action.type) {
         case "ADDTOCART": {
            //  allstates.push(state)
            state = {...state}
            return state
        }
        case "EMPTY": {
            state = {...state}
            return state
        }
        case "REMOVEFROMCART": {
            // state = {...state}
            state.cart =[]
            return state
        }
        // case "LAPTOP_STOCK": {
        //     state.laptops = 10
        //     return state
        // }
        // case "BUY_MOBILE": {
        //     state.mobile = state.mobile - 1
        //     return state
        // }
        default: return state
    }
}

export default CartReducer
