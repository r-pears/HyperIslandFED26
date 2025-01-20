import React, { useState, useEffect } from 'react';

function GameOfThronesCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  return (
    <div>
      <h1>Game of Thrones Characters</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>{character.fullName}</li>
        ))}
      </ul>
    </div>
  );
}

export default GameOfThronesCharacters;
