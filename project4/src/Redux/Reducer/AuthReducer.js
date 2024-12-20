import { LOGIN_REQUEST_SUCCESS, LOGOUT } from "../actionType"

const InitialState={
    isAuth:false,
    token:null
}

export default function AuthReducer(state=InitialState,action){
    switch(action.type){
        case LOGIN_REQUEST_SUCCESS:
            return{
                ...state,isAuth:true,token:action.payload.data.token
            }
        case LOGOUT:
            return{
                ...state,isAuth:false,token:null
            }
        default:
            return state
    }
}