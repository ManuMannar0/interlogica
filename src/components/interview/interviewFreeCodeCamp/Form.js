import React, { useEffect, useState } from 'react';

const Form = () => {
  const [objForm, setObjForm] = useState({})
  const updateObj = (el) => {
    const {name, value} = el.target
    const obj = {[name]: value}
    setObjForm({...objForm, ...obj})
  }
  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault()
        console.log(objForm)
      }}>
        <input name="name" type="text" placeholder='name' onChange={updateObj}/>
        <input name="age" type="number" placeholder='0' onChange={updateObj}/>
        <input name="xxx" type="date" placeholder='' onChange={updateObj}/> 
        <button type="submit">Submit</button>
        <button type="reset" onClick={() => setObjForm({})}>Reset</button>
      </form>
      <br/>
      {JSON.stringify(objForm) !== undefined && JSON.stringify(objForm)}
    </>
  )
}

export default Form;