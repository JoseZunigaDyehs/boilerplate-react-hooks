
export const generalReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
          ...state,
          count: state.count + 1
      }

    default:
      return state;
  }
};
