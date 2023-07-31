

// CounterApp use of HookuseSelector();


import {  useSelector } from 'react-redux';
// import { increment, decrement } from './Counter/action';

function HookSelector({id}) {

    const count = useSelector((state)=>state.value)
    return (
        <div>
            <h1>{count}-{id}</h1>
            {/* <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button> */}
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
