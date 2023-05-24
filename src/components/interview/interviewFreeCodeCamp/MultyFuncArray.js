import React from 'react';

const MultyFuncArray = ({a, b}) => {
  const arr = [
    {
      fn: (a, b) => <p>{a} + {b}: {a+b}</p>
    },
    {
      fn: (a, b) => <p>{a} - {b}: {a-b}</p>
    },
    {
      fn: (a, b) => <p>{a} * {b}: {a*b}</p>
    },
    {
      fn: (a, b) => <p>{a} / {b}: {a/b}</p>
    },
    // function(a, b) {
    //   return a/b
    // },
    // function(a, b) {
    //   return a-b
    // },
    // function(a, b) {
    //   return a*b
    // },
  ]

  return arr.map(e => e.fn(a, b))
}

export default MultyFuncArray;