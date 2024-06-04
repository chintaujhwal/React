import React from 'react'
import PropTypes from 'prop-types'

export default function Customer(props) {
    return(
        <>
            <h2>{props.name}</h2>
            <h2>{props.email}</h2>
            <h2>{props.age}</h2>
        </>
    )
}

Customer.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}