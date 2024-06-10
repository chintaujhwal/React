import React, { useState } from 'react'

function AddPassenger({addFunction}) {

    let [passenger, setPassenger] = useState({name: '', age: ''});
    
    function addPassenger(event) {
        event.preventDefault()
        addFunction(passenger)
    }

    function updateValue(e) {
        let ename = e.target.name;
        let evalue = e.target.value;

        setPassenger({...passenger, [ename]: evalue});
    }

    function clear() {
        setPassenger({name: '', age: ''});
    }

    return (
        <>
            <form onSubmit={addPassenger}>
                Name<br />
                <input type='text' value={passenger.name} name='name' onChange={updateValue} required />
                <p />
                Age<br />
                <input type='number' value={passenger.age} name='age' onChange={updateValue} required />
                <p />
                <button>Add</button>
                <button onClick={clear}>Clear</button>
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
