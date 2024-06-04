import React from 'react'
import Practicecss from '../PracticeAdvice/PracticeAdvice.module.css'
import PracticeCard from '../../Components/PracticeCard/PracticeCard'
import PracticeCard2 from '../../Components/PracticeCard/PracticeCard2'
import PracticeCard3 from '../../Components/PracticeCard/PracticeCard3'

const PracticeAdvice = () => {
  return (
    <div className={Practicecss.container}>
      <div className={Practicecss.topsection}>
        <h6>Practice Advice</h6>
        <h3>Featured Posts</h3>
      </div>

      <div className={Practicecss.card1} >
        <PracticeCard/>
        <PracticeCard2/>
        <PracticeCard3/>
        
      </div>

    </div>
  )
}

export default PracticeAdvice