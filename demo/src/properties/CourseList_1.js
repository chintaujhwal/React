import React from 'react'

export default function CourseList(props) {
    return(
        <>
        <h1>Courses: {props.courses.length}</h1>
        
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Fee</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.courses.map((i) => 
                    <tr>
                        <td>{i.title}</td>
                        <td>{i.fee}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </>
    )
}