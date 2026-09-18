import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {


  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/home" element={<h1>Home Page</h1>} />
      <Route path="/cart" element={<h1>Cart Page</h1>} />
      <Route path="/wishlist" element={<h1>Wishlist Page</h1>} />
      <Route path="/signup" element={<h1>Signup Page</h1>} />
      <Route path="/login" element={<h1>Login Page</h1>} /> */}
      </Routes>      
      <Navbar />
    </>
  )
}

export default App
