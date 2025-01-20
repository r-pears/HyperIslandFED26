// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list

import React, { useState, useEffect } from "react";
import "./EffectsComponent.css"

function EffectsComponent() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setIsloading(false);
      })
      .catch((error) =>
        console.error("Error fetching characters:", error.message)
      )
      .finally(() => setIsloading(false));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {
        <>
          <h1>Characters from Game of Thrones</h1>
          <ul className="character-grid">
            {characters.map((character) => (
              <li key={character.id} className="character-card">
                <h3>{character.fullName}</h3>
                <p>{character.title}</p>
                <img
                  src={character.imageUrl}
                  alt={character.fullName}
                  width="100"
                />
              </li>
            ))}
          </ul>
        </>
      }
    </div>
  );
}

export default EffectsComponent;
