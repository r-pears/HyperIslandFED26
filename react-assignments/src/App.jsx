import "./App.css";
import ChildComponent from "./ChildComponent";
import MyEffectComponent from "./Components/Effect/EffectsComponent";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";

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
			{ChildComponent(person)}
			{MyStateComponent()}
      {MyEffectComponent()}
		</div>
	);
}

export default App;
