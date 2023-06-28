import React from 'react'
import { useState } from 'react'
import { Navbar } from '../Components/Navbar.jsx'
import { Main } from '../Components/Main.jsx'
import { About } from '../Components/About.jsx'
import { Skills } from '../Components/Skills.jsx'
import { Projects } from '../Components/Projects.jsx'
import '../styles/global.css'

function App() {
  return(
    <React.Fragment>
      <Navbar></Navbar>
      <Main></Main>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </React.Fragment>
  )
}

export default App
