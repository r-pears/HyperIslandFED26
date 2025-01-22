import React, { useEffect, useState } from "react";
import "./EffectsComponent.css";
import MyStateComponent from "../MyStateComponent/MyStateComponent";
// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list
import React, {useState, useEffect } from "react";

const FetchComponent = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isChosenCaracter, setIsChosenCaracter] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://thronesapi.com/api/v2/Characters")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCharacters(data);
                setIsLoading(false);
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
        }, 2000);
    }, []);

    if(isLoading) {
        return <div>Loading...</div>;
    }



    return (
        <div>
            <h1>Heart and Thrones</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>{character.firstName} - {character.title}
                    <img src={character.imgUrl} alt={character.fullName} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FetchComponent