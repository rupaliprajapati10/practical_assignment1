import React, { useState } from "react";
function MessageDisplay() {
  const [message, setMessage] = useState("");
  const handleClick = () => {
    setMessage("Welcome to ReactJS!");
  };
  return (
    <div>
      <h2>Button Click Example</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>{message}</p>
    </div>
  );
}
export default MessageDisplay;

