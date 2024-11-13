import axios from "axios"
import { LOGIN_REQUEST_FAILED, LOGIN_REQUEST_PENDING, LOGIN_REQUEST_SUCCESS, SIGNUP_REQUEST_FAILED, SIGNUP_REQUEST_PENDING, SIGNUP_REQUEST_SUCCESS } from "./actionType"
import { API } from "../API/api"

export const login=(data)=>async(dispatch)=>{
try{dispatch({type:LOGIN_REQUEST_PENDING})

const response=await axios.post(`${API}/users/login`,data)
dispatch({type:LOGIN_REQUEST_SUCCESS,payload:response})}
catch (err){
dispatch({type:LOGIN_REQUEST_FAILED,payload:err.message})
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