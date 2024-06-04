import React from 'react'
import stylecss from '../Topnav2/Topnav2.module.css'
const Topnav2 = () => {
  return (
    <header className={stylecss.container}>
    <div className={stylecss.content}>
        <section className={stylecss.left_section}>
            <p className={stylecss.contact}>
                <img src="/images/Phonelogo.png" alt="Call us on" /> (225) 555-0118
            </p>
            <p className={stylecss.contact}>
                <img src="/images/email.png" alt="Mail us on" /> michelle.rivera@example.com
            </p>
        </section>
        <section className={stylecss.middle_section}>
            <p>Follow Us and get a chance to win 80% off</p>
        </section>
        <section className={stylecss.right_section}>
            <p>Follow Us :</p>
            <img src="/images/insta.png" alt="Follow on Instagram" />
            <img src="/images/youtube.png" alt="youtube" />
            <img src="/images/facebk.png" alt="Follow on Facebook" />
            <img src="/images/x.png" alt="Follow on X" />
        </section>
    </div>
</header>
  )
}

export default Topnav2
