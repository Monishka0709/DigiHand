import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Arrivals from './components/Arrivals'
import Arrival2 from './components/Arrival2'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div style={{margin:'0 1.5rem',  fontFamily:'Open Sans, serif', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Header/>
        <Hero/>
        <Arrivals/>
        <Arrival2/>
        <Blog/>
        <Footer/>

      </div>
    </>
  )
}

export default App
