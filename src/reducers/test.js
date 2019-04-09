
export const testStates = {
    first: 0
  }
  
  export const testReducer = (state = testStates, action) => {
    // var newState = Object.assign({}, state);
    switch (action.type) {
      case "COUNT":
        return {
          ...state,
          first: state.first + 1 
        };
  
      default:
        return state;
    }
  };
  