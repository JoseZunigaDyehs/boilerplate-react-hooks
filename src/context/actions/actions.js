import { types } from "./types";

/**
 *
 * @param {obj} state Todo el state
 * @param {func} dispatch Función que dispacha la acción
 */
export const useActions = (state, dispatch) => {
  function increment() {
    dispatch({ type: types.INCREMENT });
  }
  function decrement() {
    dispatch({ type: types.DECREMENT });
  }
  function reset() {
    dispatch({ type: types.RESET });
  }

  return {
    increment,
    decrement,
    reset
  };
};
