import React from 'react';
import {useStateValue} from "./state";

const App = () => {
  debugger
  const [{first},dispatch] = useStateValue();
  return(
    <div>Hola</div>
  )
};

export default App;
