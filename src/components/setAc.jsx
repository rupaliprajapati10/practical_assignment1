import React, { useState } from "react";
function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Name: " + name + "\nEmail: " + email);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Form</h2>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default ControlledForm;

