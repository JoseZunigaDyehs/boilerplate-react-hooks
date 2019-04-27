//Export actions receiving an object {state,dispatch}
export const generalActions = (props) => {
  return {
    increment:  () => {
      props.dispatch({ type: "INCREMENT" });
    },
    decrement: () => {
      props.dispatch({ type: "DECREMENT" });
    },
    reset: () => {
      props.dispatch({ type: "RESET" });
    },
    setValue: (data) => {
      // props.dispatch({ type: "SET_VALUE", data });
      externSetValue(props,data); // Extern function
    }
  }
}
// You can externalize the functions
function externSetValue(props,data) {
  props.dispatch({ type: "SET_VALUE", data});
}
