import axios from 'axios';

export const Post_Login_Start = 'Post_Login_Start';
export const Post_Login_Success = 'Post_Login_Success';
export const Post_Login_Fail = 'Post_Login_Fail';

export const Post_SignUp_Start = 'Post_SignUp_Start';
export const Post_SignUp_Success = 'Post_SignUp_Success';
export const Post_SignUp_Fail = 'Post_SignUp_Fail';


export const Get_Product_Start = 'Get_Product_Start';
export const Get_Product_Success = 'Get_Product_Success';
export const Get_Product_Fail = 'Get_Product_Fail';

export const Put_Product_Start = 'Put_Product_Start';
export const Put_Product_Success = 'Put_Product_Success';
export const Put_Product_Fail = 'Put_Product_Fail';

export const Add_Product_Start = 'Add_Product_Start';
export const Add_Product_Success = 'Add_Product_Success';
export const Add_Product_Fail = 'Add_Product_Fail';

export const Delete_Product_Start = 'Delete_Product_Start';
export const Delete_Product_Success = 'Delete_Product_Success';
export const Delete_Product_Fail = 'Delete_Product_Fail';

export const LoginCRUD = logState => dispatch => {
    dispatch({
        type: Post_Login_Start
    })
    axios.post(`https://african-marketplace-bw-1.herokuapp.com/api/auth/login`, logState)
    .then(res => {
        console.log('Login INFO', res)
        localStorage.setItem('token', res.data.token)
        dispatch({
            type: Post_Login_Success, payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: Post_Login_Fail, payload: err.data
        })
    })
}


export const SignUpCRUD = signState => dispatch => {
    dispatch({
        type: Post_SignUp_Start
    })
    axios.post(`https://african-marketplace-bw-1.herokuapp.com/api/auth/register`, signState)
    .then(res => {
        console.log('Sign Up INFO', res)
        dispatch({
            type: Post_SignUp_Success, payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: Post_SignUp_Fail, payload: err.data
        })
    })
}


export const ProductCRUD = () => dispatch => {
    dispatch({
        type: Get_Product_Start
    })
    axios.get(`https://african-marketplace-bw-1.herokuapp.com/api/inputs`)
    .then(res => {
        console.log('Product INFO', res.data)
        dispatch({
            type: Get_Product_Success, payload: res.data
        })
    })
    .catch(err => {
        console.log('Product ERROR', err)
        dispatch({
            type: Get_Product_Fail, payload: err.data
        })
    })
}

export const EditProductCRUD = edit => dispatch => {
    dispatch({
        type: Put_Product_Start
    })
    axios.put(`https://african-marketplace-bw-1.herokuapp.com/api/inputs/:id`, edit)
    .then(res => {
        console.log('Edit INFO', res)
        dispatch({
            type: Put_Product_Success, payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: Put_Product_Fail, payload: err.data
        })
    })
}

export const AddProductCRUD = add => dispatch => {
    dispatch({
        type: Add_Product_Start
    })
    axios.post(`https://african-marketplace-bw-1.herokuapp.com/api/inputs`, add)
    .then(res => {
        console.log('Add INFO', res)
        dispatch({
            type: Add_Product_Success, payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: Add_Product_Fail, payload: err.data
        })
    })
}

export const DeleteProductCRUD = del => dispatch => {
    dispatch({
        type: Delete_Product_Start
    })
    axios.delete(`https://african-marketplace-bw-1.herokuapp.com/api/inputs/:id`, del)
    .then(res => {
        console.log('Delete INFO', res)
        dispatch({
            type: Delete_Product_Success, payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: Delete_Product_Fail, payload: err
        })
    })
}







