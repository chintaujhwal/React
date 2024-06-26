import React, { useState } from 'react'

function AddPassenger({passengers, addFunction}) {

    let [passenger, setPassenger] = useState({name: '', age: ''});
    let [message, setMessage] = useState()
    
    function addPassenger(event) {
        event.preventDefault()

        let result = passengers.find(i => i.name === passenger.name);
        if(result)
            setMessage('Duplicate passenger');
        else
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
                <span style={{ color: 'red' }}> {message}</span>
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
        if (window.confirm("Are you sure ?"))
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

    function deleteAll() {
        setPassengers([])
    }

    return (
        <>
            <h2>Passengers</h2>
            <AddPassenger passengers={passengers} addFunction={addNewPassenger} />
            <ListPassengers passengers={passengers} deleteFunction={deletePassenger} />

            {passengers.length > 0 && <button onClick={deleteAll}>Delete All</button>}
        </>
    )
}
