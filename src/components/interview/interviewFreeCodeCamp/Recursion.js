import React from 'react';

const Children = ({ children }) => {
  return(
    children.map(e => {
      return(
        <div style={{paddingLeft: '1rem'}}>
          <h5 style={{paddingLeft: '1rem'}}>{e.name}</h5>
          <Children children={e.children}/>
        </div>
      )
    })
  )
}

const Recursion = ({ family }) => {
  console.log(family)
  return (
    <>
      <h1>{family.name}</h1>
      <Children children={family.children}/>
    </>
  )
}

export default Recursion;