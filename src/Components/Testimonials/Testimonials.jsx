import React from 'react'
import TestimonialsCss from '../../Components/Testimonials/Testimonials.module.css'
import user1 from '../../../public/images/user1.png'
import gird1 from '../../../public/images/gird1.png'
import gird2 from '../../../public/images/gird2.png'
import gird3 from '../../../public/images/gird3.png'
import gird4 from '../../../public/images/gird4.png'
import gird5 from '../../../public/images/gird5.png'
import gird6 from '../../../public/images/gird6.png'
import gird7 from '../../../public/images/gird7.png'
import gird8 from '../../../public/images/gird8.png'
import gird9 from '../../../public/images/gird9.png'
import startgirl from '../../../public/images/stars girl.png'
 const Testimonials = () => {
  return (
    <div  className={TestimonialsCss.wrap} >
      <div className={TestimonialsCss.container} >
        <div className={TestimonialsCss.left}>
          <section>
            <h3>What they say about us</h3>
            <img src={user1}/>
            <img src ={startgirl}/>
            <h6>Slate helps you see how many more days you need to work to reach your financial goal.</h6>
            <div className={TestimonialsCss.name}>Regina Miles</div>
            <div className={TestimonialsCss.discription}>Designer</div>
          </section>
        </div>
        <div className={TestimonialsCss.right}>
          <img src={gird1}/>
          <img src={gird2}/>
          <img src={gird3}/>
          <img src={gird4}/>
          <img src={gird5}/>
          <img src={gird6}/>
          <img src={gird7}/>
          <img src={gird8}/>
          <img src={gird9}/>
        </div>
      </div>
    </div>  
  )
}

export default Testimonials