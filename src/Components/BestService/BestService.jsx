import React from 'react'
import BestServiceCSS from '../../Components/BestService/BestService.module.css'
import bookreader from '../../../public/images/bookreader.png'
import arrowgrowth from '../../../public/images/arrowgrowth.png'
import carbonbook from '../../../public/images/carbonBook.png'
const BestService = () => {
  return (
    <div className={BestServiceCSS.container}>
        <div className={BestServiceCSS.section} >
            <h2>Featured Products</h2>
            <h3>THE BEST SERVICES</h3>
            <p>Problems trying to resolve the conflict between </p>
        </div>
        <div className={BestServiceCSS.section2}>
            <div className={BestServiceCSS.row1} >
                <img src={bookreader}/>
                <h3>Easy Wins</h3>
                <p>Get your best looking smile now!</p>
            </div>
            <div className={BestServiceCSS.row2} >
                <img src={ carbonbook}/>
                <h3>Concrete</h3>
                <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
            </div>
            <div className={BestServiceCSS.row3} >
                <img src={arrowgrowth}/>
                <h3>Hack Growth</h3>
                <p>Overcame any hurdle or any other problem.</p>
            </div>
        </div>
    </div>
  )
}

export default BestService