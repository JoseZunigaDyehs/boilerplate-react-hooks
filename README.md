# Boilerplate React Hooks
This is a boilerplate created whit create-react-app to use React Hooks and Context API like Redux Architecture

#### Demo
Functional demo
[Go demo](https://josezunigadyehs.github.io/boilerplate-react-hooks/)

## Why?
Due to the new features of ReactJS, it is possible to create an architecture and state management as in Redux, but without adding any extra libraries.

This is posible working with the new ReactJS Context and Hooks APIs.

## Features
_React.js_ - **React >16.8.0**💎

## Quick start

1. Clone this repo using `git clone https://github.com/JoseZunigaDyehs/boilerplate-react-hooks.git`
2. Move to the appropriate directory: `cd react-redux-boilerplate`.<br />
3. Run `yarn` or `npm install` to install dependencies.<br />
4. Run `npm start` to see the example app at `http://localhost:3000`.

Now you're ready build your beautiful React Application working with an architecture and state managment like Redux!

## Documentation

### Structure

    ├── public                     
    ├── src                          
    ├──── context
    ├────── actions
    ├──────── generalActions.js
    ├──────── index.js
    ├────── states
    ├──────── initialStates.js
    ├────── reducers
    ├──────── generalReducer.js
    ├──────── reducer.js
    ├────── store
    ├──────── storeContext.js
    ├──── index.js
    ├──── App.js
    ├──── serviceWorker.js
    ├── package.json            
    ├── .gitignore
    └── README.md

### Index.js
`````
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./context/store/storeContext";

/**
 * RENDER 
 * Store provider
 * - App Principal Child function
 */
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

`````

### App.js
`````

import React, { useContext } from "react";
import { StoreContext } from "./context/store/storeContext";

/**
 * Principal Component
 */
const App = () => {
  const { state, actions } = useContext(StoreContext);
  const valueRandom = () => {
    return Math.round(Math.random() * (1000 - 1) + 1);
  };
  return (
    <div>
      <p>{state.generalStates.count}</p>
      <button onClick={() => { actions.generalActions.increment(); }}>
        INCREMENT
      </button>
      <button onClick={() => { actions.generalActions.decrement(); }}>
        DECREMENT
      </button>
      <button onClick={() => { actions.generalActions.reset(); }}>
        RESET
      </button>
      <button onClick={() => { actions.generalActions.setValue(valueRandom()); }}>
        VALUE RANDOM
      </button>
    </div>
  );
};

export default App;

`````

## Context Architecture '/context'

## /actions/generalActions.js
`````
//Export actions receiving an object {state,dispatch}
export const generalActions = (props) => {
  return {
    increment:  () => {
      props.dispatch({ type: "INCREMENT" });
    },
    decrement: () => {
      props.dispatch({ type: "DECREMENT" });
    },
    reset: () => {
      props.dispatch({ type: "RESET" });
    },
    setValue: (data) => {
      // props.dispatch({ type: "SET_VALUE", data });
      externSetValue(props,data); // Extern function
    }
  }
}
// You can externalize the functions
function externSetValue(props,data) {
  props.dispatch({ type: "SET_VALUE", data});
}

`````

## /actions/index.js
`````
import { generalActions } from './generalActions'

/**
 * Export object with functions for each separate action, that receives an object {state,dispatch}
 * Return every actions 
 */
export const useActions = (state, dispatch) => {
  return {
    generalActions: generalActions({state,dispatch}),
  }
};

`````

## /reducers/reducer.js
`````
import { initialState } from "../state/initialStates";
import { generalReducer } from './generalReducer'

/**
 * Export initialState and reducer
 * 
 * reducer function, returns separate states,
 * Which have a separate reducer, who receives state and action.
 */
const reducer = (state = initialState, action) => {
  return {
    generalStates: generalReducer(state.generalStates,action)
  }
};

export { initialState, reducer };

`````

## /reducers/generalReducer.js
`````
//Define and export states of reducer
export const generalStates = {
  count: 0
}

//Export reducer
export const generalReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "RESET":
      return {
        ...state,
        count: 0
      };
    case "SET_VALUE":
      return {
        ...state,
        count: action.data
      };
    default:
      throw new Error("Unexpected action");
  }
};

`````


## /states/initialStates.js
`````
import { generalStates } from '../reducers/generalReducer'

//Export object with all separate state from reducers
export const initialState = {
  generalStates
};


`````

## /store/storeContext.js
`````
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

`````
