import { generalStates, generalReducer } from "./general";
import { testStates, testReducer } from "./test";

/**
 * Componente que tiene todos los reducers, se le puede pasar un middleware
 */
export const reducer = ({ general, test }, action) => {
  // middleware goes here, i.e calling analytics service, etc.
  return {
    generalStates: generalReducer(general, action),
    testStates: testReducer(test, action)
  };
};

export const initialStates = {
  generalStates,
  testStates
};
