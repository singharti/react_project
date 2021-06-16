import axios from "axios";

export const loginMiddleware = (data) => {
  
    return function (dispatch) {
        axios({
            url: process.env.REACT_APP_API_BASE_URL +'/login',
            method: 'post',
            data: {email: data.email, password: data.password}
        }).then(res => {
            if (res.data.email) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userData', JSON.stringify(res.data))
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: {
                        token: res.data.token,
                        username: res.data.name
                    }
                })
            }
        }, err => {
            dispatch({
                type: "LOGIN_FAIL"
            })
        })
    }
}

export const addCartMiddleware = (data) => {
    return function (dispatch) {
        axios({
            url: process.env.REACT_APP_API_BASE_URL +'/addcaketocart',
            method: 'post',
            data: {cakeid: data.cakeid, image: data.image, name: data.name, price: data.price, weight: data.weight}
        }).then(res => {
            dispatch({
                type: "ADDTOCART",
                payload: {
                    data: res.data.data
                }
            })
           
        }, err => {alert('here')})
    }
}

export const emptyCartMiddleware = () => {
    return function (dispatch) {
        axios({
            url: process.env.REACT_APP_API_BASE_URL +  '/clearcart',
            method: 'post'
        }).then(res => {
           
            dispatch({
                type: 'EMPTY_CART',
                payload : {
                    data: res.data
                }
            })
        }, err => {})
    }
}

export const removeOneCakeFromCartMiddleware = (cakeId) => {
    return function (dispatch) {
        axios({
            url: process.env.REACT_APP_API_BASE_URL + '/removeonecakefromcart',
            method: 'post',
            data: {cakeid: cakeId}
        }).then(res => {
           
            dispatch({
                type: 'REMOVE_ONE_FROM_CART',
                payload: {
                    data: res.data
                }
            })
        }, err => {})
    }
}

export const removeCakeFromCartMiddleware = (cakeId) => {
    return function (dispatch) {
        axios({
            url: process.env.REACT_APP_API_BASE_URL + '/removecakefromcart',
            method: 'post',
            data: {cakeid: cakeId}
        }).then(res => {
            dispatch({
                type: 'REMOVE_ITEM_FROM_CART',
                payload: {
                    data: res.data
                }
            })
        }, err => {})
    }
}



export const placeOrderMiddleware = (data) => {
    return function (dispatch) {
        axios({
            url: process.env.REACT_APP_API_BASE_URL + '/addcakeorder',
            method: 'post',
            data: data
        }).then(res => {
          
            dispatch({
                type: 'PLACE_ORDER',
                payload: {
                    data: res.data
                }
            })
        }, err => {})
    }
}

export const adminloginmiddleware = (data) => {
  
    return function (dispatch) {
        axios({
            url: process.env.REACT_APP_API_BASE_URL +'/login',
            method: 'post',
            data: {email: data.email, password: data.password}
        }).then(res => {
            if (res.data.email) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userData', JSON.stringify(res.data))
                localStorage.setItem('adminData', true)
               
                dispatch({
                    type: "ADMIN_LOGIN",
                    payload: {
                        token: res.data.token,
                        username: res.data.name
                    }
                })
            }
        }, err => {
            dispatch({
                type: "LOGIN_FAIL"
            })
        })
    }
}

export const adminAddCakeMiddleware = (data) => {
  
    return function (dispatch) {
        axios({
            url: process.env.REACT_APP_API_BASE_URL +'/addcake',
            method: 'post',
            data: { image: data.image,
                name: data.name,
                description: data.description,
                price: data.price,
                weight: data.weight,
                type: data.type,
                flavour: data.flavour,
                eggless: data.eggless,
             
                ingredients: data.ingredients}
        }).then(res => {
            if (res.data.email) {
               
               
                dispatch({
                    type: "CAKE_STORE",
                    payload: {
                        token: res.data.token,
                        username: res.data.name
                    }
                })
            }
        }, err => {
            dispatch({
                type: "LOGIN_FAIL"
            })
        })
    }
}

