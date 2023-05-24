import React, { useState } from 'react';

const DynamicImport = () => {
  const [res, setRes] = useState('-')
  const dynamicImport = (a,b) => {
    import('./library')
      .then(lib => setRes(lib.add(a,b)))
  }
  return <><button onClick={() => dynamicImport(1,1)}>go</button>{res}</>
}

export default DynamicImport;