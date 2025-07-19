import React from 'react'
import {ScrollTrigger, SplitText} from 'gsap/all';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger, SplitText)


//must register plugins
// gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
   <main>
    <NavBar />
    <Hero />
    <div className='h-dvh bg-black'></div>
   </main>
  )
}

export default App