// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list
import React,  { useState, useEffect } from 'react'

export default function EffectsComponent() {
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("https://thronesapi.com/api/v2/Characters")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, []); 
  
    if (Loading) return <h1>Loading...</h1>;

    if (error) return <h1>Error: {error}</h1>; // Show error if fetch fails
  
    return (
      <>
        <h1>Game of Throne Characters</h1>
        <ul>
          {data?.map((object) => (
            <li key={object.id}>{object.fullName}</li>
          ))}
        </ul>
      </>
    );
  }