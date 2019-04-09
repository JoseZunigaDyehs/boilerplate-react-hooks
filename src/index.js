import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./state";
import {mainReducer, initialStates} from "./reducers/index";
console.log(initialStates)

const initialState = {
  theme: { primary: 'green' }
};

const reducer = (state, action) => {
  debugger
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: {primary:action.newTheme}
      };
      
    default:
      return state;
  }
};
ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
