import React, { useState } from 'react'

export default function Interest(props) {

    let [interest, setInterest] = useState(0)

    function calculateInterest() {
        var amount = document.getElementById('amount').value;
        var rate = props.rate;
        if(!rate)
            rate = 15

        setInterest(amount * rate/100)
    }

    return (
        <>
            <h2>Interest Calculation</h2>
            Amount <input type='number' id='amount'></input>
            <button onClick={calculateInterest}>Calculate</button>

            {/* {interest > 0 ? <h2>Interest: {interest}</h2> : ''} */}
            {/* or */}
            {interest > 0 && <h2>Interest: {interest}</h2>}
        </>
    )
}
