import React from 'react';
import {useStateValue} from "./state";

const App = () => {
  const [{theme}, dispatch] = useStateValue();
  debugger
  return(
    <div>
    {theme.primary}
    <button style={{color:theme.primary}} onClick={()=>dispatch({type:"changeTheme",newTheme:"red"})}>Click</button>
    </div>
  )
};

export default App;
