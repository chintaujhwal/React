import React, { Component } from 'react'

export default class CourseClassComponent extends Component {

    constructor(props) {
        super(props)
        this.title = props.title;
        this.fee = props.fee
    }

    render() {
        return (
            <h2>{this.title} - {this.fee}</h2>
        )
    }
}
