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
      <br />
      <input
        type="checkbox"
        defaultChecked={false}
        id="disable-button-checkbox"
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </>
  );
}

export default App;
