import React, { Suspense } from 'react'
import { Router } from '@reach/router'
import Navbar from './components/Navbar'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About')) 
import PageLoading from './pages/PageLoading'

const App = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Router>
        <Home path='/' />
        <About path='/about' />
      </Router>
      <Navbar />
    </Suspense>
  )
}

export default App
