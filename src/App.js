import React from "react";
import { useStateValue } from "./store/store";

const App = () => {
  const [{ generalStates }, dispatch] = useStateValue();
  // debugger;
  return (
    <div>
      {generalStates.get("count")}
      <button
        onClick={() => dispatch({ state: generalStates, type: "INCREMENT" })}
      >
        Click
      </button>
    </div>
  );
};

export default App;
