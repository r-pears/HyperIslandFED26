import React from 'react';
import MyStateComponent from './Components/MyStateComponent/MyStateComponent';
import PersonComponent from './Components/MyStateComponent/PersonComponent';
import GameOfThronesCharacters from './Components/Effect/EffectsComponent';


const person = {
  name: "John",
  info: {
    age: 30,
    city: "New York",
    job: "Developer",
  },
};

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <MyStateComponent />
      <PersonComponent person={person} />
      <GameOfThronesCharacters />
    </div>
  );
}

export default App;

// Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters

// use the Fetch API to get the data
// use the useEffect hook to fetch the data when the component mounts
// use the useState hook to store the data
// display the data in a list