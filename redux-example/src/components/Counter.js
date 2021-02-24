import React from 'react'
import PropTypes from 'prop-types'
import createClass from 'create-react-class'

import Value from './Value'
import Control from './Control'

import { connect } from 'react-redux';

import * as actions from '../actions';

const Counter = createClass({

    render () {
        return (
            <div>
                <Value number={this.props.number}/>
                <Control/>
            </div>
        )
    }
});

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())},
        handleSetColor: (color) => { dispatch(actions.setColor(color))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
