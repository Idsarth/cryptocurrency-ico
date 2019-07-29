import React, { Suspense } from 'react'
import { Router } from '@reach/router'
import Navbar from './components/Navbar'
import PageLoading from './pages/PageLoading'
import Footer from './components/Footer'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))

const App = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Navbar />
      <Router>
        <Home path='/' />
        <About path='/about' />
      </Router>
      <Footer />
    </Suspense>
  )
}

export default App
