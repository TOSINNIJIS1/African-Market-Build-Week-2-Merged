import {
    Post_Login_Start, Post_Login_Success, Post_Login_Fail, 

    Post_SignUp_Start, Post_SignUp_Success, Post_SignUp_Fail, 

    Get_Product_Start, Get_Product_Success, Get_Product_Fail,

    Put_Product_Start, Put_Product_Success, Put_Product_Fail,

    Add_Product_Start, Add_Product_Success, Add_Product_Fail,

    Delete_Product_Start, Delete_Product_Success, Delete_Product_Fail
} from '../Actions/action'


const initial = {
    info : false,
    login: false,
    error: '',
    products : []

}


const reducer = (state = initial, action )  => {
    switch(action.type) {
        case Post_Login_Start: return {
            ...state, isFetching: true, error: ''
        }
        case Post_Login_Success: return {
            ...state, login : action.payload, isFetching: false, error: ''
        }
        case Post_Login_Fail: return {
            ...state, error: action.payload
        }
        case Post_SignUp_Start: return {
            ...state, isFetching: true, error: ''
        }
        case Post_SignUp_Success: return {
            ...state, info : action.payload, isFetching: false, error: ''
        }
        case Post_SignUp_Fail: return {
            ...state, error: action.payload
        }
        case Get_Product_Start: return {
            ...state, isFetching: true, error: ''
        }
        case Get_Product_Success: return {
            ...state, products : action.payload, isFetching: false, error: ''
        }
        case Get_Product_Fail: return {
            ...state, error: action.payload
        }
        case Put_Product_Start: return {
            ...state, isFetching: true, error: ''
        }
        case Put_Product_Success: return {
            ...state, product : state.products.map(product => product.id === action.payload.id ? 
                { ...product, ...action.payload} : product), isFetching: false, error: ''
        }
        case Put_Product_Fail: return {
            ...state, error: action.payload
        }
        case Add_Product_Start: return {
            ...state, isFetching: true, error: ''
        }
        case Add_Product_Success: return {
            ...state, product : action.payload, isFetching: false, error: ''
        }
        case Add_Product_Fail: return {
            ...state, error: action.payload
        }
        case Delete_Product_Start: return {
            ...state, isFetching: true, error: ''
        }
        case Delete_Product_Success: return {
            ...state, products : state.products.filter(product => product.id !== action.payload), isFetching: false, error: ''
        }
        case Delete_Product_Fail: return {
            ...state, error: action.payload
        }
        default: return state
        
    }

}

export default reducer