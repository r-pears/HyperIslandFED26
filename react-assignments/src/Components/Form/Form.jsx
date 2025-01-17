import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
