import { useEffect, useState } from "react";

export default function FetchComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error.message));
  }, []);
  return (
    <div>
      <ul>
        {data.map((character) => {
          console.log(character);
          return <li key={character.id}>{character.fullName}</li>;
        })}
      </ul>
    </div>
  );
}
