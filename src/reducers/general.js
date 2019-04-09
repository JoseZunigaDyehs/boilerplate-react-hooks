import * as Immutable from "immutable";

export const generalStates = Immutable.fromJS({
  count: 0
});

export const generalReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return action.state.set("count", action.state.get("count") + 1);

    default:
      return action.state;
  }
};
