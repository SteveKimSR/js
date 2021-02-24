import React from 'react'
import PropTypes from 'prop-types'
import createClass from 'create-react-class'

const propTypes = {
    number: PropTypes.number
}

const defaultProps = {
    number: -1
}

const Value = createClass({
    render () {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
})
Value.defaultProps = defaultProps;
Value.propTypes = propTypes;

export default Value
