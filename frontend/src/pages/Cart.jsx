import CartItem from "../components/CartItem";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Cart({ cartItems = [], removeFromCart }) {
    const navigate = useNavigate();

    return (
        <div className="cart-container flex flex-col items-center justify-center  mt-20">
            {cartItems.length === 0 ? (

                <div className="cart cart-header flex flex-col items-center justify-center  mb-4 p-4 m-4 h-96 w-[90%">
                    <div><ShoppingCart className="w-12 h-12 text-pink-500" />
                    </div>

                    <h3 className="text-xl font-semibold flex  items-center justify-center font-['Playfair_Display'] m-2">Your Cart is Empty</h3>

                    <p className="text-center flex  items-center justify-center m-2">
                        Looks like you haven't added anything to your cart yet.

                    </p>
                    <p className="text-center flex  items-center justify-center ">

                        Start Exploring cute & handmade items!
                    </p>

                    <Link to="/" className="bg-pink-400 text-white px-4 py-2 rounded-md mt-4 hover:bg-pink-500 transition-colors duration-300 m-2">
                        Start Shopping
                    </Link>
                </div>
            ) : (

                <>

                    <h3 className="text-3xl font-bold text-center text-pink-500 mb-8" style={{ fontFamily: "Dancing Script, cursive" }}>
                        My Cart
                    </h3>

                    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] max-w-6xl mt-8">

                        {cartItems.map((item) => (
                            <CartItem key={`${item.id}-${item.selectedColor}`} item={item} removeFromCart={removeFromCart} />
                        ))}
                    </div>

                    <div className="mt-6 text-center">

                        <p className="text-gray-700 mb-3 text-lg">
                            Ready to place your order?
                        </p>

                        <button
                            onClick={() =>
                                navigate("/checkout", {
                                    state: {
                                        items: cartItems
                                    }
                                })
                            }
                            className="w-full bg-pink-600 hover:bg-pink-600 text-white py-3 mb-4 rounded-xl font-semibold transition"
                        >
                            Proceed to Checkout
                        </button>

                    </div>

                </>
            )}
        </div>
    );
}
export default Cart;
