import React, { useEffect, useState } from 'react';

const SearchFilter = () => {
  const [fromapi, setFromapi] = useState()
  const [filter, setFilter] = useState()
  const [filtered, setFiltered] = useState()

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(json => setFromapi([...json]))
  }
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    setFiltered(fromapi !== undefined ? fromapi.filter(e => e.name.toLowerCase().includes(filter)) : [])
  }, [filter])

  return filtered === undefined ? 'please, wait ;)' : (
    <>
        <input placeholder='search' onChange={(e) => setFilter(e.target.value)}/>    
        <ul>
        {
            filtered.map((el,i) => <li key={i}>{el.name.toLowerCase()}</li>)
        }
        </ul>
    </>
  )
}

export default SearchFilter;