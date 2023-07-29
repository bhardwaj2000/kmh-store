import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

// we have multiple reducer. so, we combine all reducer with combineReducers
const reducers =  combineReducers({
    allProducts: productReducer,
})

export default reducers;