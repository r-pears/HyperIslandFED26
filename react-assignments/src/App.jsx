import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";
import ChildComponent from "./Components/Child/ChildComponent";
import MyEffectComponent from "./Components/Effect/EffectsComponent";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./Components/Nav/nav";
import Home from "./Components/Home/home";
import WrapComponent from "./Components/Child/WrapComponent";

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

	//  TODO ad routes to the components we've created so far
	return (
		<>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/state" element={<MyStateComponent />}></Route>
				<Route path="/effect" element={<EffectsComponent />}></Route>
				<Route
					path="/child"
					element={<WrapComponent Component={ChildComponent} Props={person} />}
				></Route>
			</Routes>
		</>
	);
}

export default App;
