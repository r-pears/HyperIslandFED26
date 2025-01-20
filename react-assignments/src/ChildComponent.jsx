import React from "react";

function ChildComponent( data ) {
	return (
		<div>
			<h1>Assignment 8</h1>
			<h2>{data.name}</h2>
			<h2>{data.info.age}</h2>
			<h2>{data.info.city}</h2>
			<h2>{data.info.job}</h2>
			<h3>{data.info.hobbies.map((hobby) => hobby.charAt(0).toUpperCase() + hobby.slice(1) + " ")}</h3>
		</div>
	);
}

export default ChildComponent;