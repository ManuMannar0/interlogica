import React from 'react';  

/**
 * Pure component definition:
  - Its return value is only determined by its input values
  - Its return value is always the same for the same input values

  Pure Component React classes provide better performance
*/
class ClassPureComponent extends React.PureComponent {    
  render() {  
      const {hello} = this.props
      return (
        <p>{hello}</p>
      )  
  }
}

// Functional component (stateless) are pure BUT they didn't provide better performance
const FuncComp = ({hi}) => <p>{hi}</p>
// To convert it in pure u have to convert it in pure class component as above OR..
// .. use { memo }  
export default React.memo(FuncComp)

const App = () => {
  return(
    <>
      <ClassPureComponent hello={'Hello'}/>
      <FuncComp hi={'Hi'}/>
    </>
  )
}
