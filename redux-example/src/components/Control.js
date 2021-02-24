import React from 'react'
import PropTypes from 'prop-types'
import createClass from 'create-react-class'

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
}

const createWarning = (funcName) => {
    return () => console.warn(funcName + 'is not defined')
}

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor')
}

const Control = createClass({

    render () {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        )
    }
})

Control.propTypes = propTypes
Control.defaultProps = defaultProps

export default Control
