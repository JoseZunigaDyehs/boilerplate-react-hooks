import { types } from "./types";

export function increment(dispatch) {
  dispatch({ type: types.INCREMENT });
}
export function decrement(dispatch) {
  dispatch({ type: types.DECREMENT });
}
export function reset(dispatch) {
  dispatch({ type: types.RESET });
}
export function value20(dispatch, data) {
  dispatch({ type: types.VALUE20, data });
}
