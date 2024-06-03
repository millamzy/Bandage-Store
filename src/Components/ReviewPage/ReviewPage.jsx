import React from 'react'
import styles from '../../Components/ReviewPage/ReviewPage.module.css'
import review2 from '../../../public/images/review2.png'
const ReviewPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <ul className={styles.reviewUL} >
                <li className={styles.reviewIL}>Description</li>
                <li>Additional Information</li>
                <li>Reviews<span>(0)</span></li>
            </ul>
        </div>

        <div className={styles.Review_section}>
            <div className={styles.left}>
                <h3 >the quick fox jumps over </h3>
                <h6 className={styles.text1}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
                     Excitation venial consequent sent nostrum met
                </h6>
                <h5 className={styles.text2}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
                     Excitation venial consequent sent nostrum met.
                </h5>
                <h6 className={styles.text3}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. 
                    Excitation venial consequent sent nostrum met.
                </h6> 
            </div>
            <div className={styles.right}></div>
            <img src={review2 }/>

        </div>
      
    </div>
  )
}

export default ReviewPage
