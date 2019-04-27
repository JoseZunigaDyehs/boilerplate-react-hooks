import { initialState, reducer } from "../reducers/reducers";
import { useActions } from "../actions";
import React, { createContext, useReducer, useEffect } from "react";

/**
 * Export StoreContext and StoreProvider
 */
const StoreContext = createContext(initialState);
const StoreProvider = ({ children }) => {
  // Get state and dispatch from Reacts new API useReducer.
  const [state, dispatch] = useReducer(reducer, initialState);
  // Get actions from useActions and pass it to Context
  const actions = useActions(state, dispatch);
  // Log new state
  useEffect(() => console.log({ newState: state }), [state]);
  // Render state, dispatch and actions
  return (
    <StoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
