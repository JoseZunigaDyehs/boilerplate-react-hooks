import { generalActions } from './generalActions'

export const useActions = (state, dispatch) => {
  return {
    generalActions: generalActions({state,dispatch}),
  }
};
