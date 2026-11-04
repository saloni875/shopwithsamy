import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import CategoryPage from "./pages/CatrgoryPage"; // <-- check spelling, should be CategoryPage
import ProductDetails from "./pages/ProductDetails";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product, selectedColor) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.selectedColor === selectedColor
    );
    if (existingItem) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1, selectedColor }]);
    }
  };

  const removeFromCart = (id, selectedColor) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedColor === selectedColor))
    );
  };

  const toggleWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const alreadyExists = prevItems.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return prevItems.filter(
          (item) => item.id !== product.id
        );
      }

      return [...prevItems, product];
    });
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} wishlistCount={wishlistItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} toggleWishlist={toggleWishlist} />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:categoryName" element={<CategoryProduct wishlistItems={wishlistItems} toggleWishlist={toggleWishlist} />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />}
        />
        <Route path="*" element={<h1 className="text-center mt-20 text-3xl font-bold">404 - Page Not Found</h1>} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;