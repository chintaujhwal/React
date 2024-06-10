import React, { useState } from 'react'

function AddPassenger({ addFunction }) {

    function addPassenger(event) {
        event.preventDefault();
        let name = document.getElementById('txtName').value;
        let age = document.getElementById('txtAge').value;
        let passenger = { 'name': name, 'age': age };
        addFunction(passenger)
    }

    return (
        <>
            <form onSubmit={addPassenger}>
                Name<br />
                <input type='text' id='txtName' required />
                <p />
                Age<br />
                <input type='number' id='txtAge' required />
                <p />
                <button>Add</button>
                <p />
            </form>
        </>
    )
}

function ListPassengers({ passengers, deleteFunction }) {

    function deletePassenger(idxToDelete) {
        deleteFunction(idxToDelete);
    }

    return (
        <>
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

export default function Passengers() {

    let [passengers, setPassengers] = useState([])

    function deletePassenger(idxToDelete) {
        setPassengers(passengers.filter((i, idx) => idx !== idxToDelete))
    }

    function addNewPassenger(passenger) {
        setPassengers([...passengers, passenger]);
    }

    return (
        <>
            <h2>Passengers</h2>
            <AddPassenger addFunction={addNewPassenger} />
            <ListPassengers passengers={passengers} deleteFunction={deletePassenger} />
        </>
    )
}
