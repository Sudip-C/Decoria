import AuthReducer from "./Reducer/AuthReducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {thunk} from 'redux-thunk'
const rootreducer= combineReducers({
    auth:AuthReducer
})

const store= legacy_createStore(rootreducer, applyMiddleware(thunk));

export default store