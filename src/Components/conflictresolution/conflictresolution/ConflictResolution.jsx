import React from 'react'
import style from './ConflictResolution.module.css'

const ConflictResolution = () => {
  return (
    <div className={style.container}>
      <div className={style.main_container}>
        <h2 className={style.main_top_text}>Designing Better Experience</h2>
        <h2 className={style.main_top_text2}>Problems trying to resolve the conflict between </h2>
        <p>
            Problems trying to resolve the conflict between the 
            two major realms of Classical physics: 
        </p>
        <h5>$16.48</h5>
        <button>ADD YOUR CALL TO ACTION</button>        
      </div>
      <div className={style.foot_brand_section}>
        <h3>Bandage</h3>
        <div className={style.foot_social}>
            <img src="images/footer/fb.png" alt="" />
            <img src="images/footer/ig.png" alt="" />
            <img src="images/footer/x.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ConflictResolution