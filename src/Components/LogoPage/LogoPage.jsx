import React from 'react';
import style from './LogoPage.module.css';
import LogoA from '../../../public/images/logoA.png';
import LogoB from '../../../public/images/LogoB.png';
import LogoC from '../../../public/images/LogoC.png';
import LogoD from '../../../public/images/LogoD.png';
import LogoE from '../../../public/images/LogoE.png';
import LogoF from '../../../public/images/LogoF.png';


const LogoPage = () => {
  return (
  <div className={style.container}>
    <div className={style.Logosection}>
      <img src={LogoA} alt="Logo A" />
      <img src={LogoB} alt="Logo B" />
      <img src={LogoC} alt="Logo C" />
      <img src={LogoD} alt="Logo D" />
      <img src={LogoE} alt="Logo E" />
      <img src={LogoF} alt="Logo F" />
    </div>
  </div>    
  );
};

export default LogoPage;

