import React from 'react'
import Nav from './Components/Nav'
import About from './Components/About'
import Projects from './Components/Projects'
import Technologies from './Components/Technologies'
import Contact from './Components/Contact'

export default function App() {
  return (
    <>
      <div className="element top-0 left-0 md:top-[70px] md:right-[-250px] md:rotate-180"></div>
      <Nav />
      <About />
      <Projects />
      <Technologies />
      <Contact/>
    </>
  )
}