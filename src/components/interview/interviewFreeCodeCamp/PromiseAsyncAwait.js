import React, { useState } from 'react';

const myPromise = new Promise(
  (res, rej) => {
    setTimeout(
      () => {res('server is online')},
      3000
    )
  }
)

const PromiseAsyncAwait = () => {
  const [result, setResult] = useState('loading')

  myPromise
    .then(res => setResult(res))
  return(
    <>{result}</>
  )
}

export default PromiseAsyncAwait;