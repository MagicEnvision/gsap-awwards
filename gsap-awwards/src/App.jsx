import React from 'react'
import {ScrollTrigger, SplitText} from 'gsap/all';
import NavBar from './components/NavBar';
import Hero from './components/Hero';


//must register plugins
// gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
   <main>
    <NavBar />
    <Hero />
   </main>
  )
}

export default App