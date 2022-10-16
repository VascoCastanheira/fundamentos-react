import React from "react";
import students from "../../data/students";

export default props => {
    const Studentlis = students.map((student) => {
        return (
            <li key={student.id}>
                {student.id} {student.name} {student.grade}
            </li>
            );

    })
    return(
        <div>
            <ul style={{listStyle: "none"}}>{Studentlis}</ul>
        </div>)
}