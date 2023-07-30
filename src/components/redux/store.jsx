

// Develop store 

import {createStore} from 'redux';


import createReducer from '../Counter/createReducer';

const store = createStore(createReducer); 


export default store ; 

