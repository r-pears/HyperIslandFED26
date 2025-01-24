import "./App.css";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";

function App() {
  return (
    <div>
      <header>
        <h1>This is React</h1>
      </header>
      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data */}
      <PropsComponent person={person} />
    </div>
  );
}

export default App;
