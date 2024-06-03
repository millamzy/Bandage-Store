import React from 'react'
import { useState } from 'react'
import Hero from '../../Components/Hero/Hero';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import BestService from '../../Components/BestService/BestService';
import PracticeAdvice from '../PracticeAdvice/PracticeAdvice'
import Testimonials from '../../Components/Testimonials/Testimonials';
import HeaderProducts from '../FeaturedProducts/HeaderProducts.jsx';
import ConflictResolution from '../../Components/conflictresolution/conflictresolution/ConflictResolution.jsx';
const Home = () => {
  return (
    <>

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