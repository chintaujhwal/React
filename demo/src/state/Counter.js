import React, { useState } from 'react'

export default function Counter() {

    let [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1)
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}
