const AuthReducer = (state = {
    isLoggedIn: !!localStorage.token,
    username: localStorage.getItem('userData') ? (JSON.parse(localStorage.getItem('userData'))).name : undefined,
    token: localStorage.token,
    // isLoading: false,
    isAdmin:localStorage.adminData ? localStorage.adminData : false,
}, action) => {
    
    switch (action.type) {
        case "LOGIN_SUCCESS" : {
            state = {...state}
            state['token'] = action.payload?.token
            state['isLoggedIn'] = true
            state['username'] = action.payload?.username
            state['isLoading'] = true
            return state
        }
       
        case "LOGIN_FAIL" : {
            state = {...state}
            state['isLoading'] = false
            return state
        }
        case "LOGOUT" : {
            state = {...state}
            state['token'] = localStorage.clear()
            state['isLoggedIn'] = false
            state['username'] = undefined
            state['isAdmin'] = localStorage.clear()
            return state
        }
        
        case "WRONG_CREDENTIALS": {
            state = { ...state }
            state["isloading"] = false
            state["message"] = "Invalid email or password"
            return state
        }
        case "ADMIN_LOGIN": {
            state = { ...state }
            state["token"] = action.payload?.token
            state["username"] = action.payload?.username
            state['isLoggedIn'] = true
            state["isloading"] = false
            state["isAdmin"] = true
            return state
        }
        case "ADMIN_LOGOUT": {
            state = { ...state }
            localStorage.clear();
            state['isLoggedIn'] = true
            state["isLoggedin"] = false
            state["isAdmin"] = false
            return state
        }
        default : return state
    }
}

export default AuthReducer