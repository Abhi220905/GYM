import React from 'react'
import HeroSection from '../layouts/Hero'
import Features from '../layouts/Feature'
import AddSection from '../layouts/Add'
import Milestones from '../layouts/Milestones'
import Trainers from '../layouts/Trainers'
import Bmi from '../layouts/Bmi'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <Features/>
        <AddSection/>
        <Milestones/>
        <Trainers/>
        <Bmi/>
        <Footer/>
    </>
  )
}

export default Home