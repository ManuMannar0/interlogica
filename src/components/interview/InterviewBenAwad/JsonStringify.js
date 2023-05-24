import React, { useEffect, useState } from 'react';

const JsonStringify = () => {
  const API = 'https://jsonplaceholder.typicode.com/todos/1'
  const [fromapi, setFromapi] = useState()
  
  useEffect(() => {
    fetch(API)
    .then(resp => {
      if (resp.ok) {
        return resp.json()
      }else{
        console.log('Not a network error. Server response: '+ resp.status)
      }
    })
    .then(json => {
      console.log(json)
      setFromapi({...json})
    })
    .catch(err => console.log('Network error: '+ err))
  }, [])

  return <h3>{fromapi == undefined ? '..wait please :)' : JSON.stringify(fromapi)}</h3>
}

export default JsonStringify;
