import React, { useEffect, useState } from "react";
// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list
import "./Effects.css";

const GameOfThron = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCharacterData, setSelectedCharacterData] = useState(null);

    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Characters")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error.message}</p>;

    return (
        <div className="container">
          <h1 className="header">Game of Thrones Characters</h1>
          <ul>
            {data.map((character) => (
              <li 
               key={character.id} onClick={() => setSelectedCharacterData(character)}>
                {character.fullName}
              </li>
            ))}
          </ul>
          {selectedCharacterData && (
            <div className="selected-character">
              <h2> {selectedCharacterData.fullName}</h2>
              <p>Title: {selectedCharacterData.title}</p>
              <p>Family: {selectedCharacterData.family}</p>
              <img src={selectedCharacterData.imageUrl} alt={selectedCharacterData.fullName} />
            </div>
          )}
        </div>
    );
}
export default GameOfThron;