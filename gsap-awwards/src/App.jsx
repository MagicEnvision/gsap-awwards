import React from 'react'
import {ScrollTrigger, SplitText} from 'gsap/all';
import NavBar from './components/NavBar';


//must register plugins
// gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
   <main>
    <NavBar />
   </main>
  )
}

export default App