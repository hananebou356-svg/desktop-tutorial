import { useState } from 'react'



import './App.css'
import Navbar from './Navbar'
import Imagees from './Imagees'
import Section from './Section'
import Hero from './Hero'
import Card from './Card'
import Footer from './Footer'

function App() {

  return (
    <>
      <Navbar />
      <Imagees />
      <Section/>
      <Hero/>
      <Card />
      <Footer/>
    </>
  )
}

export default App
