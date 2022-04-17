import { combineReducers } from "redux";
import { web3Reducer } from "./reducer";


 const rootReducer =  combineReducers({
    web3:web3Reducer
})

export default rootReducer;