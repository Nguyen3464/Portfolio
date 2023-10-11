import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { About } from './Pages/About'
import { Projects } from './Pages/Projects'
import { Home } from './Pages/Home'
import { Skills } from './Pages/Skills'
import { Contact } from './Pages/Contact'
import "./Css/Footer.css"
import "./Css/Header.css"
import "./Css/Home.css"


const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App