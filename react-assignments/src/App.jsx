import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import Nav from "./Components/Nav/Nav"
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "./Components/Home/Homepage";

function App() {
  
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  return (
    <div>
      <header>
        <h1>This is React</h1>
      </header>
      <Nav />
     
       <Routes>
         <Route index element={<Homepage />}/>
       </Routes>
     
      
    </div>
  );
}

export default App;
