import React, {createContext, useContext, useReducer} from 'react';
export const StateContext = createContext(); //Create our Context
//Componente que nos Proveerá nuestro Content, pasándole un reducer, initialState y el children
export const StateProvider = ({reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext); // Para usar nuestros estados