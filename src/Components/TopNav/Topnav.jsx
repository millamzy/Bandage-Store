import React from 'react'
import styleA from '../TopNav/Topnav.module.css'
import phonelogo from '../../../public/images/Phonelogo.png'
import email from  '../../../public/images/email.png'
import facebok from  '../../../public/images/facebk.png'
import insta from  '../../../public/images/insta.png'
import youtube from  '../../../public/images/youtube.png'
import x from  '../../../public/images/x.png'
const Topnav = () => {
  return (
    <div className={styleA.contain}>
        <div className={styleA.topsideA}>
          <div className={styleA.mostphone}>
            <img src={phonelogo}/>
            <div className={styleA.phonNumber}>(225) 555-0118</div>
          </div>

          <div className={styleA.emailside}>
            <img src={email}/>
            <div className={styleA.emailText}>michelle.rivera@example.com</div>
          </div>

        </div>

        {/* side two */}
        <div className={styleA.topsideB}>Follow Us  and get a chance to win 80% off</div>
       
         {/* side three */}
        <div className={styleA.topsideC}>
          <div className={styleA.follow}>Follow Us  :</div>
          <div className={styleA.topicon}>
            <img className={styleA.ins} src={insta}/>
            <img src={youtube}/>
            <img src={facebok}/>
            <img src={x}/>
          </div>
        </div>

    </div>
  )
}

export default Topnav