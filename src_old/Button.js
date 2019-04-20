import React from "react";

import { useStateValue } from "./store/store";

const Button = () => {
  const [{ generalStates }, dispatch] = useStateValue();
  debugger
  return (
    <div>
      {generalStates.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Click</button>
    </div>
  );
};

export default Button;
