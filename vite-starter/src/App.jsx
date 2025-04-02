import "./App.css";
import React from "react";
function App() {
  const [buttonColor, setButtonColor] = React.useState("red");
  const nextColor = buttonColor === "red" ? "blue" : "red";
  return (
    <>
      <button className={buttonColor} onClick={() => setButtonColor(nextColor)}>
        change to {nextColor}
      </button>
    </>
  );
}

export default App;
