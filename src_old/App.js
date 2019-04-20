import React from "react";
import Button from "./Button";
import { StoreProvider } from "./store/store";

const App = () => {
  const initialState = {
    generalStates: { count: 0 }
  };

  const reducer = (state, action) => {
    debugger
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          generalStates: {count: state.generalStates.count + 1}
        };

      default:
        return state;
    }
  };

  return (
    <StoreProvider initialState={initialState} reducer={reducer}>
      <Button />
    </StoreProvider>
  );
};

export default App;
