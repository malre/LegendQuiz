import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }


    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Pax" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Flap 30" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Two Hours" clicked={this.props.onAddFiveCounter}  />
                <CounterControl label="Voyage" clicked={this.props.onSubtractCounter}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddFiveCounter: () => dispatch({type: 'ADD'}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT'}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);