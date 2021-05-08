import React from 'react'
import Footer from '../components/Footer'
import GlobalStyles from '../components/GlobalStyles'
import Navbar from '../components/Navbar'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'
import Skills from './Skills'
import Teams from './Teams'

function Main() {
   
  
    return (
        <>
        <GlobalStyles/>
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Skills/>
        <Teams/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Main
