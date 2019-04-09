
export const generalStates = {
  first: 0
}

export const generalReducer = (state = generalStates, action) => {
  var newState = Object.assign({}, state);
  debugger
  switch (action.type) {
    case "COUNT":
    debugger
      return {
        ...state,
        first: state.first + 1 
      };

    default:
      return state;
  }
};
