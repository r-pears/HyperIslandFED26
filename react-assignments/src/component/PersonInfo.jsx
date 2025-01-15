import React from "react";
/* function */
function PersonInfo({props}) {
    return (
        <div class="container">
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.info.age}</h2>
            <h2>City: {props.info.city}</h2>
            <h2>Job: {props.info.job}</h2>
            <h2>Hobbies: </h2>
            <ul>
                {props.info.hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
                ))}
            </ul>   
        </div>
    )
}

export default PersonInfo;