// import design from '../Topna'
import style from '../Topnav/Topnav.module.css'
import telephone from '../../../public/images/Phonelogo.png'
import email from '../../../public/images/email.png'
import insta from '../../../public/images/insta.png'
import youtube from '../../../public/images/youtube.png'
import facebook from '../../../public/images/facebk.png'
import twitter from '../../../public/images/x.png'

const Topnav = () => {
    return (
        <header className={style.container}>
            <div className={style.content}>
                <section className={style.left_section}>
                    <p className={style.contact}><img src={telephone} alt="Call us on" /> (225) 555-0118</p>
                    <p className={style.contact}><img src={email} alt="Mail us on" /> michelle.rivera@example.com</p>
                </section>
                <section className={style.middle_section}>
                    <p>Follow Us  and get a chance to win 80% off</p>
                </section>
                <section className={style.right_section}>
                    <p>Follow Us :</p>
                    <img src={insta} alt="Follow on Instagram" />
                    <img src={youtube} alt="youtube" />
                    <img src={facebook} alt="Follow on Facebook" />
                    <img src={twitter} alt="Follow on X" />
                </section>
            </div>
        </header>
    )
}

export default Topnav