import style from '../Topnav/Topnav.module.css';

const Topnav = () => {
    return (
        <header className={style.container}>
            <div className={style.content}>
                <section className={style.left_section}>
                    <p className={style.contact}>
                        <img src="/images/Phonelogo.png" alt="Call us on" /> (225) 555-0118
                    </p>
                    <p className={style.contact}>
                        <img src="/images/email.png" alt="Mail us on" /> michelle.rivera@example.com
                    </p>
                </section>
                <section className={style.middle_section}>
                    <p>Follow Us and get a chance to win 80% off</p>
                </section>
                <section className={style.right_section}>
                    <p>Follow Us :</p>
                    <img src="/images/insta.png" alt="Follow on Instagram" />
                    <img src="/images/youtube.png" alt="youtube" />
                    <img src="/images/facebk.png" alt="Follow on Facebook" />
                    <img src="/images/x.png" alt="Follow on X" />
                </section>
            </div>
        </header>
    );
};

export default Topnav;
