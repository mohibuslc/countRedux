

// Develop createReducer

import { DECREMENT, INCREMENT } from "./actionType"

const initialState = {

    value: 23 , 

};
const countReducer=(state= initialState , action)=>{

    switch(action.type){

        case INCREMENT:
            return{

                ...state, 
                value: state.value +1 
            };

            case DECREMENT :

            return{

                ...state, 
                value: state.value -1
            }

            default:

            return state
    }
}

export default countReducer ; 
