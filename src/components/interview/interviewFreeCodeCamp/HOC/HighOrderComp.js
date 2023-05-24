import React from 'react';

const HighOrderComp = (a,b,Comp) => {
  return function HOC() {
    return (
      <div style={{background: 'gray', border: '3px solid'}}>
        <h1>HIGH ORDER COMPONENT</h1>
        <Comp sum={a+b} />
      </div>
    )
  }
}

export default HighOrderComp;