import Navbar2 from '../Navbar2/Navbar2.module.css'
import dropdown from '../../../public/images/drop.png'
import person from '../../../public/images/usericon.png'
import search from '../../../public/images/searchicon.png'
import cart from '../../../public/images/cart.png'
import heart from '../../../public/images/love.png'
import { useState } from 'react'
import classNames from 'classnames'
import searchicon from '../../../public/images/isearch.png'
import shopcart from '../../../public/images/shopping-cart.png'
import toggle from '../../../public/images/menu_icon.png'
import { Link } from 'react-router-dom'

const Navbar3 = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
     <nav className={Navbar2.container}>
            <section className={Navbar2.title}>
                <Link to="/">
                <h3>Bandage</h3>
                </Link>
            </section>
            <section className={Navbar2['nav-links']}>
                <ul>
                    <li>Home</li>
                    <li>Shop <img src={dropdown} alt="Add to Cart" /></li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>
                <ul className={classNames(Navbar2.signup, Navbar2.list_items)}>
                    <li><img src={person} alt="person" /> Login / Register</li>
                    <li><img src={search} alt="search" /></li>
                    <li><img src={cart} alt="View Cart" /> 1</li>
                    <li><img src={heart} alt="Reaction" /> 1</li>
                </ul>
            </section>
            <section className={Navbar2['toggle-menu']}>
                <img src={searchicon} alt="Click to search" />
                <img src={shopcart} alt="Add to cart" />
                <img src={toggle} alt="toggle menu" onClick={toggleMenu}/>
            </section>
            <ul className={classNames(Navbar2.toggle_items, { [Navbar2['is-open']]: isOpen })}>
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </nav>
  )
}

export default Navbar3