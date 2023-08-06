//  rootReducer ; 


import { combineReducers } from "redux";
import countReducer from "../Counter/createReducer";
import dynamicCreateReducer from "../Dynamic/DynamicCreateReducer";

const rootReducer = combineReducers({

    count:countReducer, 
    dynamicvalue:dynamicCreateReducer,

})


export default rootReducer ;


