import React from 'react';
import { Suspense } from 'react';
import FallBackForSuspense from './FallBackForSuspense';
import BigText from './BigText';

// before lazy loading, Bundle.js -> 302B - 12ms
// after lazy loading, Bundle.js -> 430KB - 170ms

const LazyBigText = React.lazy(() => import('./BigText'))

const App = () => {
  return(
    <Suspense fallback={<FallBackForSuspense />}>
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
      <BigText />
    </Suspense>
  )
}

export default App;