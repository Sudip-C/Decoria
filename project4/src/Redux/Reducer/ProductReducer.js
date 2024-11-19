import { GET_PRODUCT_FAILED, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS } from "../actionType"

const InitialState={
    Product_Data:[],
    isLoading:false,
    isError:false
}

export default function ProductReducer(state=InitialState,action){
    switch(action.type){
        case GET_PRODUCT_PENDING:
            return{
                ...state,isLoading:true,isError:false
            }
        case GET_PRODUCT_SUCCESS:
            return{
                ...state,isLoading:false,Product_Data:action.payload.data,isError:false
            }
        case GET_PRODUCT_FAILED:
            return{
                ...state,isLoading:false,isError:true
            }
        default:
            return state
    }
}