import React, { useState } from "react";
import styleB from"../../Components/Navbar/Navbar.module.css";
import menu_icon from "../../../public/images/menu_icon.png"

const MobileNavbar = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  // Toggle the Mobile Nav open / close
  const handleMobileNavClick = () => {
    mobileNavIsOpen ? setMobileNavIsOpen(false) : setMobileNavIsOpen(true);
  };

  window.addEventListener("resize", () => {
    window.innerWidth > 600 && setMobileNavIsOpen(false);
  });

  return (
    <nav className={styleB.mobileNav_container}>
      <img  />
      <div>JHJ</div>
      <img
        className={styleB.menu_icon}
        src={menu_icon}
        // alt={hamburger menu icon}
        onClick={handleMobileNavClick}
      />
      <div className={styleB.mobileNav_menu_container}>
        <ul
          className={`${
            mobileNavIsOpen ? "mobileNav_open" : "mobileNav_closed"
          } mobileNav_menu_list`}
        >
          <li className={styleB.home}>Home</li>
          <li className={styleB.products}>Product</li>
          <li className={styleB.price}>Pricing </li>
          <li className={styleB.contact}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
