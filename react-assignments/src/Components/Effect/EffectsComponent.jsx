// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list


import React, {useState, useEffect} from "react";
import "./EffectsComponent.css"

function EffectsComponent() {

const[data, setData] = useState(null);

useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
        .then((response)=> {
            if (!response) {
                throw new Error("Error loading")
            }
        })
        .then((data) => setData(data))
        .catch((error) => {
            console.error(error)
        })
}, []);

return (
    <div>
        <ul>
            {data.map((character)=> (
                <li>{character.fullName}</li>
            ))}
        </ul>
    </div>
)

}

export default EffectsComponent;

/* fetch('https://thronesapi.com/api/v2/Characters')
.then((response) => response.json())
.then((data) => setData(data))
.catch((error) => setError(error))
.finally(() => setLoadingData(false));
}, []);

if (loadingData) return <p>Loading</p>
if (error) return <p>Error</p>

return (
<div>
    <ul>
        {data.map((character)=> (
            <li>{character.fullName}</li>
        ))}
    </ul>
</div>
) */