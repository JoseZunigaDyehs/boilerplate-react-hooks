import React from 'react';
import {useStateValue} from "./state";

const App = () => {
  const [{generalStates}, dispatch] = useStateValue();
  return(
    <div>
    {generalStates.first}
    <button onClick={()=>dispatch({type:"COUNT"})}>Click</button>
    </div>
  )
};

export default App;
