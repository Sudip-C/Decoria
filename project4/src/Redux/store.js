import AuthReducer from "./Reducer/AuthReducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {thunk} from 'redux-thunk'
import ProductReducer from "./Reducer/ProductReducer";
const rootreducer= combineReducers({
    auth:AuthReducer,
    product:ProductReducer
})

const store= legacy_createStore(rootreducer, applyMiddleware(thunk));

export default store