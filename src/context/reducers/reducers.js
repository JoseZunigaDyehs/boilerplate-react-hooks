import { initialState } from "../initial/initialStates";
import { types } from "../actions/types";
import { generalReducer } from './generalReducer'

//Retorna los states separados, los cuales tienen el reducer separado y se les pasa su state y la action
const reducer = (state = initialState, action) => {
  return {
    generalStates: generalReducer(state.generalStates,action)
  }
};

export { initialState, types, reducer };
