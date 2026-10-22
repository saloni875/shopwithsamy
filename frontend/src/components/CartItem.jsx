import {Trash} from "lucide-react";
function CartItem({ item }) {
    return (
        <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
            <div>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-pink-500">${item.price.toFixed(2)}</p>\
                <button className="bg-red-500 text-white px-2 py-1 rounded-md mt-2 hover:bg-red-600 transition-colors duration-300">
                    <Trash className="w-4 h-4" /> Remove
                </button>
            </div>
        </div>
    );
}

export default CartItem;