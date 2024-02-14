import { useState } from 'react'
import './DForm.jsx'
import './Hero.jsx'
import './Navbar.jsx'
import './SectionHeader.jsx'
import './TopDest.jsx'
import './WhyChoose.jsx'
import './Trending.jsx'
import './TravelNotes.jsx'
import './Footer.jsx'
import './App.css'
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'
import TopDest from './TopDest.jsx'
import WhyChoose from './WhyChoose.jsx'
import Trending from './Trending.jsx'
import TravelNotes from './TravelNotes.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <TopDest/>
      <WhyChoose/>
      <Trending/>
      <TravelNotes/>
      <Footer/>
    </>
  )
}

export default App
