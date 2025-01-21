// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list
import React, { useState, useEffect } from 'react';

function EffectComponent() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters").then(response => response.json())
      .then((json) => setCharacters(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Game of Thrones Characters</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.fullName}</li>
        ))}
      </ul>
    </div>
  );
}

export default EffectComponent;