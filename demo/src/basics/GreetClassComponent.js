import React, { Component } from 'react'

export default class GreetClassComponent extends Component {
    
    getMessage() {
        return "Greeting from the class component";
    }

    render() {
        return (
            <h1>{this.getMessage()}</h1>
        )
    }
}