import { types } from "../actions/types";

//Se exporta para luego pasarlos al initialStates
export const generalStates = {
  count: 0
}

export const generalReducer = (state, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case types.RESET:
      return {
        ...state,
        count: 0
      };
    case types.VALUE20:
      return {
        ...state,
        count: action.data
      };
    default:
      throw new Error("Unexpected action");
  }
};
