import { useState } from "react";
import { Link } from "react-router-dom"
import { ShoppingCart, Heart, X, LogOut, Home, Info, Phone, LogIn } from "lucide-react"


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <>
            <nav className="nav-bar flex justify-between items-center bg-pink-300 h-16 px-4  fixed top-0 left-0 right-0 w-full z-50 shadow-md mx-auto sm:px-6 sm:py-4">
                {/* for desktop */}
                <div className="hidden lg:flex w-full flex justify-between items-center ">


                    {/* left nav   */}
                    <div className="  nav-bar-left flex items-center gap-6">
                        <Link to="/" className="flex items-center gap-2">
                            <img src="/logo.jpeg" alt="logo" className="h-14 md:h-16 w-auto rounded-full" />
                        </Link>

                    </div>
                    <Link to="/"><h1 className="  text-2xl font-bold font-['Playfair_Display'] cursor-pointer">ShopWithSamy<span className="text-pink-400 " >♡</span></h1> </Link>


                    {/* right nav  */}
                    <div className="nav-bar-right flex items-center gap-6">
                        <Link to="/" className="text-lg font-semibold hover:text-pink-400 transition-colors duration-300 relative group font-medium cursor-pointer">Home
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-500 group-hover:w-full"></span>
                        </Link>

                        <Link to="/cart" className="text-lg font-semibold hover:text-pink-400 transition-colors duration-300 ml-4 relative group font-medium">
                            <ShoppingCart
                                className="inline-block mr-1"
                                size={22}
                            />
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-500 group-hover:w-full"></span>
                        </Link>

                        <Link to="/wishlist" className="text-lg font-semibold hover:text-pink-400 transition-colors duration-300 ml-4 relative group font-medium">
                            <Heart
                                className="inline-block mr-1"
                                size={22}
                            />
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-500 group-hover:w-full"></span>
                        </Link>

                        <Link to="/signup" className="text-lg font-semibold hover:text-pink-400 transition-colors duration-300 ml-4 relative group font-medium">Signup
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-500 group-hover:w-full"></span>
                        </Link>

                        <Link to="/login" className="text-lg font-semibold hover:text-pink-400 transition-colors duration-300 ml-4 relative group font-medium">Login
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-500 group-hover:w-full"></span>
                        </Link>

                    </div>
                </div>

                {/* for mobile */}
                <div className="block lg:hidden flex justify-between gap-4 items-center w-full">

                    <button className="text-2xl font-bold text-gray-800 hover:text-pink-400 transition-colors duration-300" onClick={handleMenuClick}>☰</button>

                    {/* menu drawer */}

                    <div className={`fixed top-2 left-0 transition-transform ease-in-out duration-500 bg-pink-100 w-[70%] h-[70vh] ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} p-8 z-40 rounded-l-xl `}>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-4 right-4 text-xl p-2"
                        > <X size={24} /></button>

                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="px-5 py-3 flex items-center gap-3 hover:bg-pink-200 cursor-pointer">
                        <Home size={20} /><span>Home</span>
                    </Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)} className="px-5 py-3 flex items-center gap-3 hover:bg-pink-200 cursor-pointer">
                        <Info size={20} /><span>About</span>
                    </Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="px-5 py-3 flex items-center gap-3 hover:bg-pink-200 cursor-pointer">
                        <Phone size={20} /><span>Contact</span>
                    </Link>
                    <Link to="/wishlist" onClick={() => setIsMenuOpen(false)} className="px-5 py-3 flex items-center gap-3 hover:bg-pink-200 cursor-pointer">
                        <Heart size={20} /><span>Wishlist</span>
                    </Link>
                    

                        <div className="border-t my-2 border-gray-300 dark:border-gray-700"></div>

                    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="px-5 py-3 flex items-center gap-3 hover:bg-pink-200 cursor-pointer">
                        <LogIn size={20} /><span>Login</span>
                    </Link>

                        

                        <button className="px-5 py-3 flex items-center gap-3 text-left hover:text-red-700 text-bold transition-colors"
                        >
                            <LogOut size={20} />
                            <span>Logout</span>
                        </button>



                    </div>

                    <Link to="/"> <h1 className="  text-2xl font-bold font-['Playfair_Display'] cursor-pointer">ShopWithSamy</h1> </Link>

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

                </div>
            </nav>
        </>
    );

}

export default Navbar;