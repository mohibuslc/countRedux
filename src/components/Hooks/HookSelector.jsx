

// CounterApp use of HookuseSelector();


import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from '../Counter/action';


function HookSelector() {

  const count = useSelector((state) => state.count.value)

  const dispatch = useDispatch();

  function incrementHandler() {

    dispatch(increment());

  }

  function decrementHandler() {

    dispatch(decrement())
  }


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={ decrementHandler}>Decrement</button>
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

export default HookSelector;
