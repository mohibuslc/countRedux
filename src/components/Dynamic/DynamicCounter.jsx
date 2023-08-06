
// Develop DynamicCounter.jsx 

import { useDispatch, useSelector } from 'react-redux';

import {increment , decrement} from '../Dynamic/Daction'

function DynamicCounter() {
  const count = useSelector((state) => state.dynamicvalue.value); // Adjust the state path as needed
  const dispatch = useDispatch();

  const incrementHandler=(value)=> {
   dispatch(increment(value))
  }

  const decrementHandler=(value)=>{
    dispatch(decrement(value));
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => incrementHandler(23)}>Increment</button>
      <button onClick={() => decrementHandler(2)}>Decrement</button>
    </div>
  );
}




// const mapStateToProps = (state , owenProps) => {

//     console.log(owenProps)
//     return {
//         count: state.value,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: (value) => dispatch(increment(value)),
//         decrement: (value) => dispatch(decrement(value)),
//     };
// };

export default DynamicCounter;
