
// Develop Action 

import { INCREMENT, DECREMENT } from "./actionType";

export function increment(value){

    return{

        type: INCREMENT , 

        payload: value , 
    }
}

export function decrement(value){

    return{

        type: DECREMENT , 

        payload: value , 
    }
}
