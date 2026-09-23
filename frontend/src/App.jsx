import { Routes, Route  } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from "./components/Footer";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/wishlist" element={<Wishlist/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} /> 
      <Route path="/contact" element={<Contact/>} />
      </Routes>      
      
      <Footer />
    </>
  )
}

export default App;
