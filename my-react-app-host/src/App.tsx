import { lazy, Suspense } from 'react';

const MF1App = lazy(() => import('mf1/App'))
const MF2App = lazy(() => import('mf2/App'))

function App() {

  return (
    <>
      Hello World!!
      <Suspense fallback={<div>Loading MF1...</div>}>
        <MF1App />
      </Suspense>
      <Suspense fallback={<div>Loading MF2...</div>}>
        <MF2App />
      </Suspense>
    </>
  )
}

export default App
