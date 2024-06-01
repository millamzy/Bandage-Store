import React from 'react'
import { useState } from 'react'
import Hero from '../../Components/Hero/Hero';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import BestService from '../../Components/BestService/BestService';
import PracticeAdvice from '../PracticeAdvice/PracticeAdvice'
import Testimonials from '../../Components/Testimonials/Testimonials';

const Home = () => {
  return (
    <>

    <Hero/>
    <FeaturedProducts/>
    <BestService/>
    <PracticeAdvice/>
    <Testimonials/>
  </>
  )
}

export default Home