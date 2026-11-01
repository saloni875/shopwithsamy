import { useState } from "react";
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
import CategoryProduct from "./pages/CategoryProduct";
import CategoryPage from "./pages/CatrgoryPage";
import ProductDetails from "./pages/ProductDetails";


function App() {

  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product, selectedColor) => {
    const existingItem = cartItems.find((item) => item.id === product.id && item.selectedColor === selectedColor);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1, selectedColor }]);
    }
  }
  const removeFromCart = (id, selectedColor) => {
  setCartItems((prevCartItems) =>
    prevCartItems.filter(
      (item) =>
        !(item.id === id && item.selectedColor === selectedColor)
    )
  );
};

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      <Route path="/wishlist" element={<Wishlist/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} /> 
      <Route path="/contact" element={<Contact/>} />
      <Route path="/category/:categoryName" element={<CategoryProduct/>} />  
      <Route path="/category" element={<CategoryPage/>} />
      <Route path="/product/:id" element={<ProductDetails addToCart={addToCart}/>} />
      </Routes>       
      
      <Footer />
    </>
  )
}

export default App;
