import { generalStates, generalReducer } from './general';

/**
 * Componente que tiene todos los reducers, se le puede pasar un middleware
 */
export const mainReducer = ({ general }, action) => {
  // middleware goes here, i.e calling analytics service, etc.
  return {
    generalStates: generalReducer(general, action),
  };
};

export const initialStates = {
  generalStates
}