import React, { useState } from 'react'

export default function Passengers() {

    let [passengers, setPassengers] = useState([])

    function addPassenger() {
        let name = document.getElementById('txtName').value;
        let age = document.getElementById('txtAge').value;

        setPassengers([...passengers, { 'name': name, 'age': age }]);
    }

    function deletePassenger(idxToDelete) {
        setPassengers(passengers.filter((i, idx) => idx !== idxToDelete))
    }

    return (
        <>
            <h2>Passengers</h2>

            Name<br />
            <input type='text' id='txtName' required />
            <p />
            Age<br />
            <input type='number' id='txtAge' required />
            <p />
            <button onClick={addPassenger}>Add</button>
            <p />

            {passengers.length > 0 && <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        passengers.map((i, idx) =>
                            <tr key={idx}>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td><button onClick={() => deletePassenger(idx)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>}
        </>
    )
}
