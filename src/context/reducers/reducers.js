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
