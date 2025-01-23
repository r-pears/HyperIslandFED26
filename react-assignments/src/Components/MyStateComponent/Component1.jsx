import React from 'react';



function Component1 ( {person} ) {
    return (
        <div>
            <h1>{person.name}</h1>
            <h2>Age: {person.info.age}</h2>
            <h2>City: {person.info.city}</h2>
            <h2>Job: {person.info.job}</h2>
            <h2>Hobbies: 
                {person.info.hobbies.map((hobby) =>(
                    <li>{hobby}
                    </li>
                ))
                }</h2>
            
        </div>
    )
} 

export default Component1;