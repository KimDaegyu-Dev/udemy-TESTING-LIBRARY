import "./App.css";
import React from "react";
import { kebabCaseToTitleCase } from "./helpers";
function App() {
  const [buttonColor, setButtonColor] = React.useState("medium-violet-red");
  const [checked, setChecked] = React.useState(false);
  const nextColor =
    buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const className = checked ? "gray" : buttonColor;
  return (
    <>
      <button
        className={className}
        onClick={() => setButtonColor(nextColor)}
        disabled={checked}
      >
        change to {kebabCaseToTitleCase(nextColor)}
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
