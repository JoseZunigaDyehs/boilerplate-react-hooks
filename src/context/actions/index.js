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
