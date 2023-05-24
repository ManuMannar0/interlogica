import React, { useEffect, useState } from 'react';

const PaginationTS = () => {
  const [fromapi, setFromapi] = useState<any[] | undefined>()
  const [loadMoreCounter, setLoadMoreCounter] = useState(1)
  const [APIpagination, setAPIpagination] = useState('https://jsonplaceholder.typicode.com/comments?postId='+loadMoreCounter)

  const fetchData = () => {
    fetch(APIpagination)
    .then(resp => resp.json())
    .then(json => setFromapi(fromapi !== undefined ? [...fromapi, ...json] : [...json]))
  }
  useEffect(() => {
    fetchData()
  }, [APIpagination])
  useEffect(() => {
    setAPIpagination('https://jsonplaceholder.typicode.com/comments?postId='+loadMoreCounter)
  }, [loadMoreCounter])
  useEffect(() => {
    fetchData()
  }, [])

  return fromapi === undefined ? 'please, wait ;)' : (
    <>
      <ul>
        {
          fromapi.map((el,i) => <li key={i}>{el.name} - {el.email}</li>)
        }
      </ul>
      <br/>
      <button onClick={() => setLoadMoreCounter(loadMoreCounter+1)}>{loadMoreCounter}</button>
    </>
  )
}

export default PaginationTS;