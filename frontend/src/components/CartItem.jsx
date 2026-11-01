import { Trash } from "lucide-react";
function CartItem({ item, removeFromCart }) {
    return (
        <div key={`${item.id}-${item.selectedColor}`} className="cart-items flex flex-col w-full max-w-3xl p-4 m-4  border border-pink-400 rounded-xl" >
            <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover rounded-xl " />
            <div>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-700 mt-1">
                    Colour: {item.selectedColor}
                </p>
                <div className="flex justify-between items-center  mt-2">
                    <p className="text-pink-500">${item.price.toFixed(2)}</p>
                    <button 
                        className="bg-red-500 text-white px-2 py-1 rounded-md mt-2 hover:bg-red-600 transition-colors duration-300"
                        onClick={() => removeFromCart(item.id, item.selectedColor)}
                    >
                        <Trash className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;