import React, {useEffect, useState} from "react";
import "./EffectsComponent.css";

// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list

function EffectsComponent() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p>Error fetching characters: {error}</p>;

  return (
    <div>
      <h1>Game of Thrones Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <strong>{character.fullName}</strong> - {character.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EffectsComponent;
