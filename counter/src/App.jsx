import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/About'
import SolutionsPage from './pages/SolutionsPage'

function App() {
  const [count, setCount] = useState('')

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={LandingPage} />
          <Route path='/about' Component={AboutPage} />
          <Route path='/solutions' Component={SolutionsPage} />
        </Routes>
      </BrowserRouter>
          
      
    </>
  )
}

export default App
