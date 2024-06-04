import React from 'react'

function ShowCourse({course}) {
   return(
    <tr>
        <td>{course.title}</td>
        <td>{course.fee}</td>
    </tr>
   ) 
}

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
                    props.courses.map((i) => <ShowCourse key = {i.title} course = {i}/>)
                }
            </tbody>
        </table>
        </>
    )
}