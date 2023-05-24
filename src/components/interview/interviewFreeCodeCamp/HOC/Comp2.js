import React from 'react';
import HighOrderComp from './HighOrderComp';

const Comp = ({sum}) => {
    return(
      <h3>Comp 2 - Sum is: {sum}</h3>
    )
  }

const Comp2 = HighOrderComp(5,5,Comp)
export default Comp2;