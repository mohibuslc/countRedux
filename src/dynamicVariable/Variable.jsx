

// owenProps useing dynamic data pass " Variable.jsx"

import { connect } from 'react-redux';
import { increment, decrement } from '../components/Counter/action';
import { increment as dynamicIncrement, decrement as dynamicDecrement } from '../components/Dynamic/Daction';

function Variable({ count, increment, decrement }) {
    return (
        <div>
            <h3>Value of : {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        count: ownProps.dynamic ? state.dynamicValue : state.count,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: ownProps.dynamic ? () => dispatch(dynamicIncrement(30)) : () => dispatch(increment()),
        decrement: ownProps.dynamic ? () => dispatch(dynamicDecrement(4)) : () => dispatch(decrement()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Variable);
