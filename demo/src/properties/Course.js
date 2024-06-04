import React from 'react'

// export default function Course(props) {
//     return(
//         <>
//         <h2>Course: {props.title}</h2>
//         <h2>Fee: {props.fee}</h2>
//         </>
//     )
// }

export default function Course({title, fee}) {
    return(
        <>
        <h2>Course: {title}</h2>
        <h2>Fee: {fee}</h2>
        </>
    )
}