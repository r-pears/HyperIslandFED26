import React, { useState } from "react";

const MyStateComponent = () => {
	// TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
	const [formData, setFormData] = useState({ name: "", age: "" });

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log("Form Data:", formData);
	}

	return (
		<div>
			<br />
			<h1>Assingment 9</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Name"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
				<input
					type="number"
					placeholder="Age"
					name="age"
					value={formData.age}
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default MyStateComponent;
