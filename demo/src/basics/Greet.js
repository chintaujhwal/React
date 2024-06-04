import React from 'react'

export default function Greet() {
    let hours = (new Date()).getHours();

    let message = "Good Evening";
    if (hours < 12)
        message = "Good Morning";
    else
        if(hours < 17)
            message = "Good Afternoon"

    return(<h1 style={{color: 'blue'}}>{message}</h1>)
}