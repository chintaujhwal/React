import React from 'react'

export default function Interest(props) {

    function calculateInterest() {
        var amount = document.getElementById('amount').value;
        var rate = props.rate;
        if(!rate)
            rate = 15

        var interest = amount * rate/100;
        window.alert(interest);
    }

    return (
        <>
            <h2>Interest Calculation</h2>
            Amount <input type='number' id='amount'></input>
            <button onClick={calculateInterest}>Calculate</button>
        </>
    )
}
