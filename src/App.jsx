
import './App.css'
import { BrowserRouter,Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar.jsx';
 import Topnav from './Components/Topnav/Topnav.jsx';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Footer from './Components/footer/Footer.jsx';
import Cart from '././pages/Cart/Cart.jsx';


function App() {
 


  return (
    <BrowserRouter>
    <Topnav/> 
    <Navbar/>
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


