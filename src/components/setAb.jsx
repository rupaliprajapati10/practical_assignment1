import React, { useState } from "react";
function BackgroundChange() {
  const [color, setColor] = useState("white");
  const changeColor = () => {
    setColor("blue");
  };
  return (
    <div style={{ backgroundColor: color, height: "200px" }}>
      <h2>Background Color Change</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}
export default BackgroundChange;
