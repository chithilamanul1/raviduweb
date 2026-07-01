import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Music } from './components/Music'
import { Classes } from './components/Classes'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
export function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-100 selection:bg-teal-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Music />
        <Classes />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
