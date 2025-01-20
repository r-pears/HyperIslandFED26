import React, { useState, useEffect } from "react";

const FetchCharacters = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message} </div>;
  }
  return (
    <div>
      <h1>characters from Game of Thrones</h1>
      <ul>
        {data &&
          data.map((character) => (
            <li key={character.id}>
              {character.fullName} - {character.title}, {character.family}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FetchCharacters;

// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list
