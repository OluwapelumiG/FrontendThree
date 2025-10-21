import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FormPage from './components/Form'

function App() {
  const [count, setCount] = useState('')

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FormPage />
      
    </>
  )
}

export default App
