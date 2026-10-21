import CartItem from "../components/CartItem";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";


function Cart({cartItems=[]}) {

    return(
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
                <div>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Cart;
               