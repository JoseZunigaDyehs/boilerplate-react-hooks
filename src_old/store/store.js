import React, {createContext, useContext, useReducer} from 'react';
export const StoreContext = createContext(); //Create our Context like STORE REDUX
//Componente que nos Proveerá nuestro Content, pasándole un reducer, initialState y el children
export const StoreProvider = ({reducer, initialState, children}) =>(
  <StoreContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StoreContext.Provider>
);
export const useStateValue = () => useContext(StoreContext); // Para usar nuestros estados