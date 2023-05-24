import React, { useEffect, useState } from 'react';

const RenderJson = () => {
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

  return fromapi !== undefined ? <h3 key={fromapi.id}>{fromapi.id} - {fromapi.title}</h3> : 'please, wait ;)'
}

export default RenderJson;
