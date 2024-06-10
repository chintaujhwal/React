import React, { useState } from 'react'

export default function Passengers() {

    let [passengers, setPassengers] = useState([])

    function addPassenger() {
        let name = document.getElementById('txtName').value;
        let age = document.getElementById('txtAge').value;

        passengers.push({ 'name': name, 'age': age });
        setPassengers(passengers);
        console.log(passengers);
    }

    return (
        <>
            <h2>Passengers</h2>

            Name <br />
            <input type='text' id='txtName' /><br /><br />
            Age <br />
            <input type='number' id='txtAge' /><br /><br />
            <button onClick={addPassenger}>Add</button><br /><br />

            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                <tr>
                    {
                        passengers.map(i => {
                            <>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td><button>Delete</button></td>
                            </>
                        })
                    }
                </tr>
            </table>
        </>
    )
}
