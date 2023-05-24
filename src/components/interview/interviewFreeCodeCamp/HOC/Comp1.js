import React from 'react';
import HighOrderComp from './HighOrderComp';

const Comp = ({sum}) => {
  return(
    <h3>Comp 1 - Sum is: {sum}</h3>
  )
}

const Comp1 = HighOrderComp(1,1,Comp)
export default Comp1;