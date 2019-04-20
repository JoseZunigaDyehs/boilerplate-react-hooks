import React from "react";
import { useStateValue } from "./store/store";
import { StoreProvider } from "./store/store";
import { reducer, initialStates } from "./reducers/index";

const App2 = () => {
  const [{ generalStates }, dispatch] = useStateValue();
  const content = () => {
    return (
      <StoreProvider initialState={initialStates} reducer={reducer}>
        <div>
          {generalStates.get("count")}
          <button
            onClick={() =>
              dispatch({ state: generalStates, type: "INCREMENT" })
            }
          >
            Click
          </button>
        </div>
      </StoreProvider>
    );
  };
  return content();
};

export default App2;
