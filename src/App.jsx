import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Tech from './components/Tech'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className='overflow-x-hidden text-white antialiased selection:border-y-cyan-300 selection:text-cyan-900'>
  <div className='fixed top-0 -z-0 h-full w-full'>
  
  </div>
  {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
  <div className='container mx-auto px-10'>
    
    <Nav />
  </div>
  <Hero />
  <About/>
  <Tech />
  <Project />
  <Contact/>
 </div>
  )
}

export default App
