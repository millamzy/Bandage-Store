import React from 'react'
import partcardcss from './practiceCard.module.css'
import unsplasH1 from '../../../public/images/unsplasH1.png'
import Vector from '../../../public/images/Vector.png'
import clock from '../../../public/images/clock.png'
import grater from '../../../public/images/grater.png'
const PracticeCard = () => {

 
  
  return (
    <div className={partcardcss.movcard}>
          <div className={partcardcss.topmovcard}>
            <img src={unsplasH1 }/>
            <div className={partcardcss.new}>New</div>
          </div>
          <div className={partcardcss.navpart}>
            <div className={partcardcss.google} >Google</div>
            <div className={partcardcss.Trending}>Trending</div>
            <div className={partcardcss.New}>New</div>
          </div>
        <div className={partcardcss.movcard1}>
          <h4>Loudest à la Madison #1 (L'integral)</h4>
              <p>We focus on ergonomics and meeting you where you work. It's only a 
                keystroke away.</p>
          <div className={partcardcss.timeComment}>
            <div className={partcardcss.time} >
              <img src={clock}/>
              <div className={partcardcss.date}>22 April 2021</div>
            </div>
            <div  className={partcardcss.Comment} >
              <img src={Vector}/>
              <div className={partcardcss.textComent}>10 comments</div>
            </div>
          </div>

          <div className={partcardcss.learnmore}>
            <h6>Learn More</h6>
            <img src={grater}/>
          </div>
        </div> 
    </div>
  )
}

export default PracticeCard
