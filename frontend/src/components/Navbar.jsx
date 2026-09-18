import { Link } from "react-router-dom"
import { ShoppingCart, Heart } from "lucide-react"

function Navbar() {

    return (
        <>
            <nav className="nav-bar flex justify-between items-center bg-pink-100 h-16 px-4 py-2 fixed top-0 left-0 right-0 w-full z-50 shadow-md mx-auto sm:px-6 sm:py-4">
                <div className="nav-bar-left flex items-center gap-16">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.jpeg" alt="logo" className="h-14 md:h-16 w-auto rounded-full" />
                    </Link>

                </div>
                <h1 className="  text-2xl font-bold font-['Playfair_Display']">ShopWithSamy<span className="text-pink-400 " >♡</span></h1>
                <div className="nav-bar-right">
                    <Link to="/" className="text-lg font-semibold hover:text-pink-400 transition-colors duration-300 relative group font-medium">Home
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-500 group-hover:w-full"></span>
                    </Link>

                    <Link to="/cart" className="text-lg font-semibold hover:text-pink-400 transition-colors duration-300 ml-4 relative group font-medium">
                        <ShoppingCart
                            className="inline-block mr-1"
                            size={22}
                        />
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-500 group-hover:w-full"></span>
                    </Link>

                    <Link to="/wishlist" className="text-lg font-semibold hover:text-pink-400 transition-colors duration-300 ml-4 relative group font-medium">
                        <Heart
                            className="inline-block mr-1"
                            size={22}
                        />
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-500 group-hover:w-full"></span>
                    </Link>

                    <Link to="/signup" className="text-lg font-semibold hover:text-pink-400 transition-colors duration-300 ml-4 relative group font-medium">Signup
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-500 group-hover:w-full"></span>
                    </Link>

                    <Link to="/login" className="text-lg font-semibold hover:text-pink-400 transition-colors duration-300 ml-4 relative group font-medium">Login
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-500 group-hover:w-full"></span>
                    </Link>

                </div>
            </nav>
        </>
    );

}

export default Navbar;