import React from 'react'
import { useState } from 'react'
import Hero from '../../Components/Hero/Hero';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import BestService from '../../Components/BestService/BestService';
import PracticeAdvice from '../PracticeAdvice/PracticeAdvice'
import Testimonials from '../../Components/Testimonials/Testimonials';
import HeaderProducts from '../FeaturedProducts/HeaderProducts.jsx';
import ConflictResolution from '../../Components/conflictresolution/conflictresolution/ConflictResolution.jsx';
import Topnav from '../../Components/Topnav/Topnav.jsx'
import Navbar from '../../Components/Navbar/Navbar.jsx';
const Home = () => {
  return (
    <>
    <Topnav/>
    <Navbar />
    <Hero/>
    <HeaderProducts/>
    <FeaturedProducts/>
    <BestService/>
    <PracticeAdvice/>
    <Testimonials/>
    <ConflictResolution/>
  </>
  )
}

export default Home