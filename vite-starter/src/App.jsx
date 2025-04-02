import "./App.css";
import React from "react";
function App() {
  const [buttonColor, setButtonColor] = React.useState("red");
  const [checked, setChecked] = React.useState(false);
  const nextColor = buttonColor === "red" ? "blue" : "red";
  const className = checked ? "gray" : buttonColor;
  return (
    <>
      <button
        className={className}
        onClick={() => setButtonColor(nextColor)}
        disabled={checked}
      >
        change to {nextColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </>
  );
}

export default App;
