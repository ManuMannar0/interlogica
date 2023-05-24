import React from 'react';
import { useContext } from 'react';
import { Data } from './Context';

const Display = () => {
  const { name, dollar } = useContext(Data)
  return <h3>{name} has {dollar} dollars</h3>
}

export default Display;