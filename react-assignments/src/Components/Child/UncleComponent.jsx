import React from "react";
import ChildComponent from "./ChildComponent";

const UncleComponent = (props) => {
	return (
		<div className="componentContainer">
			<h1>Welcome to my first component</h1>
			<ChildComponent {...props} />
		</div>
	);
};

export default UncleComponent