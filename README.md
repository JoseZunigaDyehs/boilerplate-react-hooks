# Boilerplate React Hooks
This is a boilerplate created whit create-react-app to use React Hooks and Context API like Redux Architecture

## Demo
Functional demo
[Go demo](https://josezunigadyehs.github.io/boilerplate-react-hooks/)<br/>

## Why?
Due to the new features of ReactJS, it is possible to create an architecture and state management as in Redux, but without adding any extra libraries.

This is posible working with the new ReactJS Context and Hooks APIs.

## Inspiration
I'd inspired by two articles of Medium 

1. [State Management with React Hooks and Context API in 10 lines of code!](https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c)
2. [Replace Redux state with React Hooks and Context](https://itnext.io/replace-redux-state-with-react-hooks-and-context-7906e0fd5521)


## Features
_React.js_ - **React >16.8.0**💎

## Quick start

1. Clone this repo using `git clone https://github.com/JoseZunigaDyehs/boilerplate-react-hooks.git`
2. Run `yarn` or `npm install` to install dependencies.<br />
3. Run `npm start` to see the example app at `http://localhost:3000`.

Now you're ready build your React Application working with an architecture and store managment like Redux!

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
Render StoreProvider App Principal with a child function.

`````
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./context/store/storeContext";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();

`````

### App.js
Principal function, it can use `{ state, actions }` as parameter using useContext method and passing the StoreContext Hook.
It Have handle functions that dispatch functions to actions functions 

`````

import React, { useContext } from "react";
import { StoreContext } from "./context/store/storeContext";

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

## Context Architecture
Here is the magic!

### ACTIONS

### /actions/index.js
 Export object with functions for each separate action, that receives an object {state,dispatch}
 Return every actions 
 
`````
import { generalActions } from './generalActions'

export const useActions = (state, dispatch) => {
  return {
    generalActions: generalActions({state,dispatch}),
  }
};

`````

### generalActions.js
Export actions receiving an object { state, dispatch } to access to state or dispatch the actions.

You can externalize the functions for complex logic.

`````
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
      externSetValue(props,data);
    }
  }
}

function externSetValue(props,data) {
  props.dispatch({ type: "SET_VALUE", data});
}

`````

### /reducers/reducer.js
Export initialState and reducer reducer function, 

reducer function returns separate states, which is a separate reducer, who receives state and action.

`````
import { initialState } from "../state/initialStates";
import { generalReducer } from './generalReducer'

const reducer = (state = initialState, action) => {
  return {
    generalStates: generalReducer(state.generalStates,action)
  }
};

export { initialState, reducer };

`````

### /reducers/generalReducer.js
Define and export states and reducer
`````
export const generalStates = {
  count: 0
}

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


### /states/initialStates.js
Exports an object with all separate state from reducers

`````
import { generalStates } from '../reducers/generalReducer'

export const initialState = {
  generalStates
};


`````

### /store/storeContext.js
Exports StoreContext and StoreProvider.

It get the state and dispatch from new API useReducer `[ state, dispatch ]`.
It get the actions from useActions and pass it to Context `actions`.
You can use all Hooks here like `useEffect`, in this case, to show the new state.
It's return a Provider that receive a value with `{ state, dispatch, actios }`, it's encapsulate a children function to render.
 
`````
import { initialState, reducer } from "../reducers/reducers";
import { useActions } from "../actions";
import React, { createContext, useReducer, useEffect } from "react";

const StoreContext = createContext(initialState);
const StoreProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  useEffect(() => console.log({ newState: state }), [state]);

  return (
    <StoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

`````
