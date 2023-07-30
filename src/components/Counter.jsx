

// CounterApp  Develop 
import { connect } from 'react-redux';
import { increment, decrement } from './Counter/action';

function Counter({ count, increment, decrement }) {
    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

const mapStateToProps = (state , owenProps) => {

    console.log(owenProps)
    return {
        count: state.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
