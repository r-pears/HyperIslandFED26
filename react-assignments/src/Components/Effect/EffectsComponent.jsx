import React, { useEffect, useState } from "react";

// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list

const MyEffectComponent = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		fetch("https://thronesapi.com/api/v2/Characters")
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((err) => console.error("error fetching data", err))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error! {error}</div>;
	}

	return (
		<div>
            <h1>Assignment 10</h1>
			<ol>
				{data.map((character) => {
					return <li>{character.firstName + " " + character.lastName}</li>;
				})}
			</ol>
		</div>
	);
};

export default MyEffectComponent;
