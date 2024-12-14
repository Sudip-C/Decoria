import { GET_CART_SUCCESS, GET_PRODUCT_FAILED, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, GET_WISHLIST_SUCCESS } from "../actionType"

const InitialState={
    Product_Data:[],
    cart:[],
    wishlist:[],
    isLoading:false,
    isError:false,
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
        case GET_CART_SUCCESS:
            return{
                ...state,cart:action.payload
            }
        case GET_WISHLIST_SUCCESS:
            return{
                ...state,wishlist:action.payload
            }
        default:
            return state
    }
}