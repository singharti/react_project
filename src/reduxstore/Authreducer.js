function AuthReducer(state = {
    // laptops: undefined,
    // mobile: undefined
}, action) {
    switch (action.type) {
         case "LOGIN": {
            state['token'] = action.payload?.token
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

export default AuthReducer