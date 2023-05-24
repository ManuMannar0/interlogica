import React from 'react';
import { useContext } from 'react';
import { Data } from './Context';

const Setter = () => {
  const { setName } = useContext(Data)
  return <button onClick={() => setName('Emanuele')}>Set my name</button>
}

export default Setter;