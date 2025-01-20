import React from 'react';
import MyStateComponent from './Components/MyStateComponent/MyStateComponent';
import PersonComponent from './Components/MyStateComponent/PersonComponent';

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
    </div>
  );
}

export default App;