import axios from "axios"
import { GET_CART_FAILED, GET_CART_PENDING, GET_CART_SUCCESS, GET_PRODUCT_FAILED, GET_PRODUCT_PENDING, 
    GET_PRODUCT_SUCCESS, GET_WISHLIST_FAILED, GET_WISHLIST_PENDING, GET_WISHLIST_SUCCESS, LOGIN_REQUEST_FAILED, LOGIN_REQUEST_PENDING, LOGIN_REQUEST_SUCCESS, LOGOUT, SIGNUP_REQUEST_FAILED, SIGNUP_REQUEST_PENDING, SIGNUP_REQUEST_SUCCESS } from "./actionType"
import { API } from "../API/api"

export const login=(data)=>async(dispatch)=>{
try{dispatch({type:LOGIN_REQUEST_PENDING})

const response=await axios.post(`${API}/users/login`,data)
dispatch({type:LOGIN_REQUEST_SUCCESS,payload:response})}
catch (err){
dispatch({type:LOGIN_REQUEST_FAILED,payload:err.message})
}

}

export const logout =async(dispatch)=>{
    try {
        dispatch({type:LOGOUT})
    } catch (error) {
        alert(error)
    }
}

export const signup=(data)=>async(dispatch)=>{
    try{dispatch({type:SIGNUP_REQUEST_PENDING})
    
    const response=await axios.post(`${API}/users/signup`,data)
    dispatch({type:SIGNUP_REQUEST_SUCCESS,payload:response})}
    catch (err){
    dispatch({type:SIGNUP_REQUEST_FAILED,payload:err.message})
    }
    
    }

export const getAllproducts =async(dispatch)=>{
    try {
        dispatch({type:GET_PRODUCT_PENDING})

        const response =await axios.get(`${API}/products/getProduct`)
        
        dispatch({type:GET_PRODUCT_SUCCESS,payload:response})
    } catch (error) {
        dispatch({type:GET_PRODUCT_FAILED})
    }
}

export const getFilteredProducts =(filters)=> async (dispatch) => {
    try {
      const response = await axios.get(`${API}/products/filter`, { params: filters });
      dispatch({type:GET_PRODUCT_SUCCESS,payload:response})
    } catch (error) {
      dispatch({type:GET_PRODUCT_FAILED})
      
    }
  };

export const addToCart =(data,Token) =>async (dispatch)=>{
    try {
        const response=await axios.post(`${API}/users/cart`,data,{
            headers:{
                Authorization:`Bearer ${Token}`
            }
        })
    } catch (error) {
        console.error("message:",error.message)
    }
}

export const getCart =(Token) =>async (dispatch)=>{
    try {
        dispatch({type:GET_CART_PENDING})
        const response=await axios.get(`${API}/users/cart`,{
            headers:{
                Authorization:`Bearer ${Token}`
            }
        })
        dispatch({type:GET_CART_SUCCESS,payload:response})
    } catch (error) {
        dispatch({type:GET_CART_FAILED})
        console.error("message:",error.message)
    }
}



export const addToWishlist =(data,Token) =>async (dispatch)=>{
    try {
        const response=await axios.post(`${API}/users/wishlist`,data,{
            headers:{
                Authorization:`Bearer ${Token}`
            }
        })
    } catch (error) {
        console.error("message:",error.message)
    }
}

export const getWishlist =(Token) =>async (dispatch)=>{
    try {
        dispatch({type:GET_WISHLIST_PENDING})
        const response=await axios.get(`${API}/users/wishlist`,{
            headers:{
                Authorization:`Bearer ${Token}`
            }
        })
        dispatch({type:GET_WISHLIST_SUCCESS,payload:response})
    } catch (error) {
        dispatch({type:GET_WISHLIST_FAILED})
        console.error("message:",error.message)
    }
}