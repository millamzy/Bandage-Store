
import './App.css'
import { BrowserRouter,Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import MobileNavbar from './Components/Navbar/MobileNavbar';
 import Topnav from './Components/TopNav/Topnav';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Footer from './Components/footer/Footer.jsx';
import Cart from '././pages/Cart/Cart.jsx';

function App() {


  return (
    <BrowserRouter>
    <Topnav/> 
    <Navbar/>
    <MobileNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:productId" element={<ProductDetail/>} />
        <Route path="/Cart" element={<Cart />} />
      </Routes> 
      <Footer/>
    </BrowserRouter>

  )
}

export default App


