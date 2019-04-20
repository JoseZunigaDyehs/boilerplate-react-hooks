import { initialState } from "../states/initialStates";
import { types } from "../actions/types";

const reducer = (state = initialState, action) => {
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
    default:
      throw new Error("Unexpected action");
  }
};

export { initialState, types, reducer };
