import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ImpactStats from './components/ImpactStats'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="app">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ImpactStats />
        <Skills />
        <Timeline />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
