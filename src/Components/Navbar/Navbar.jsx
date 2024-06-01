import React from "react";
import styleB from "../../Components/Navbar/Navbar.module.css";
import usericon from "../../../public/images/usericon.png";
import searchicon from "../../../public/images/searchicon.png";
import cart from "../../../public/images/cart.png";
import love from "../../../public/images/love.png";
const Navbar = () => {
  return (
    <nav className={styleB.navbar}>
      <div>
        <h3> Bandage</h3>
      </div>
      <div className={styleB.nav1}>
        <ul className={styleB.menu_list}>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>
      </div>
      {/* <div className={styleB.logiside}>
                  <div className={styleB.login}>
                    <img src={usericon}/>
                  
                          <p className={styleB.textlogin}>Login / Register</p>
                  </div>
                  <div className={styleB.loginIcn}>
                  <div>
                  <img src={searchicon}/>
                  </div>

                  <div className={styleB.cartcount}>
                    <img src={cart}/>
                    <p className={styleB.cartnum}>1</p>
                  </div>

                  <div className={styleB.lovetext}>
                  <img src={love}/>
                  <p className={styleB.lovenum}>1</p>
                  </div>
                  </div>
                  
            </div> */}

      <div className={styleB.logiside}>
        <div className={styleB.login}>
          <div>
            <img src={usericon} />
          </div>
          <div>
            <p className={styleB}>Login / Register</p>
          </div>
        </div>
        <div className={styleB.login}>
          <div>
            <img src={searchicon} />
          </div>

          <div>
            <p className={styleB.textLogin}>1</p>
          </div>
        </div>

        <div className={styleB.login}>
          <div>
            <img src={cart} />
          </div>
          <div>
            <p className={styleB.textLogin}>1</p>
          </div>
        </div>
        <div className={styleB.login}>
          <div>
            <img src={love} />
          </div>
          <div>
            <p className={styleB.textLogin}>1</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
