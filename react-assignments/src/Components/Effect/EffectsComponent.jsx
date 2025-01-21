import React, { useState, useEffect } from 'react';

function EffectComponent() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json())
      .then((json) => {
        setCharacters(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch characters");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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