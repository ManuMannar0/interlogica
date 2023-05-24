import React, { useState } from 'react';
import { Data } from './Context';
import Setter from './Setter';
import Display from './Display';

const App = () => {
  const [name, setName] = useState('NoName')
  const dollar = 100
  return(
    <Data.Provider value={{name, setName, dollar}}>
      <Display />
      <Setter />
    </Data.Provider>
  )
}

export default App;
