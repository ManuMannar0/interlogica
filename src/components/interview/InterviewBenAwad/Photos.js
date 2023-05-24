import React, { useEffect, useState } from 'react';

const Photos = () => {
  const API = 'https://jsonplaceholder.typicode.com/photos'
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
      setFromapi(json)
    })
    .catch(err => console.log('Network error: '+ err))
  }, [])

  return fromapi === undefined ? 'please, wait ;)' : (
    fromapi.map((el,i) => {
      return(
        <div key={i}>
          <h1>{el.title}</h1>
          <img src={el.thumbnailUrl} alt={el.title} />
        </div>
      )
    })
  )
}

export default Photos;
