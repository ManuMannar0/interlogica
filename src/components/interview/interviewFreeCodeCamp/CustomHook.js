import React from 'react';

const useMyCustomHook = (string) => {
  const charNum = string.length
  const helloConcat = 'Hello '+string
  const vocaliRemove = string.split('').filter(e => {
    console.log(e)
    return(
      e !== 'a' &&
      e !== 'e' &&
      e !== 'i' &&
      e !== 'o' &&
      e !== 'u'
    )
  })
  return {charNum, helloConcat, vocaliRemove}
}

const CustomHook = () => {
  const {charNum, helloConcat, vocaliRemove} = useMyCustomHook('Emanuele')
  return(
    <>
      <p>charNum: {charNum}</p>
      <p>helloConcat: {helloConcat}</p>
      <p>vocaliRemove: {vocaliRemove}</p>
    </>
  )
}

export default CustomHook;