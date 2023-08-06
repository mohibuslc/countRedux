

// Develop createReducer

import { DDECREMENT, DINCREMENT } from "./DactionType"

const initialState = {

    value: 0,

};
const dynamicCreateReducer = (state = initialState, action) => {

    switch (action.type) {

        case DINCREMENT:
            return {

                ...state,
                value: state.value + action.payload, 
            };

        case DDECREMENT:

            return {

                ...state,
                value: state.value - action.payload , 

            }

        default:

            return state
    }
}

export default dynamicCreateReducer; 
