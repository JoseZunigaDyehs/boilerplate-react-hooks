//Define and export states of reducer
export const generalStates = {
  count: 0
}

//Export reducer
export const generalReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "RESET":
      return {
        ...state,
        count: 0
      };
    case "SET_VALUE":
      return {
        ...state,
        count: action.data
      };
    default:
      throw new Error("Unexpected action");
  }
};
