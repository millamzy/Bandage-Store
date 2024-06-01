
import './App.css'
import { BrowserRouter,Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import MobileNavbar from './Components/Navbar/MobileNavbar';
 import Topnav from './Components/TopNav/Topnav';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {


  return (
    <BrowserRouter>
    <Topnav/> 
    <Navbar/>
    <MobileNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:productId" element={<ProductDetail/>} />
      </Routes> 
    </BrowserRouter>

  )
}

export default App
