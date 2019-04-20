import React, { useContext } from "react";
import { StoreContext } from "./context/store/storeContext";

const App = () => {
  const { state, actions } = useContext(StoreContext);
  return <div>
    <p>{state.generalStates.count}</p>
    <button onClick={()=>{actions.increment()}}>INCREMENT</button>
    <button onClick={()=>{actions.decrement()}}>DECREMENT</button>
    <button onClick={()=>{actions.reset()}}>RESET</button>
    <button onClick={()=>{actions.value20(20)}}>VALUE 20</button>
  </div>;
};

export default App;
