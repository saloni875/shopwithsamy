import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function WishlistItem({ item, toggleWishlist }) {
    return (
        <div className="w-full bg-white rounded-2xl shadow-sm border border-pink-100 p-3 flex flex-col">

            {/* Product Image */}
            <div className="w-full aspect-square bg-pink-100 rounded-xl overflow-hidden relative">

                <img
                    src={item.images?.[0] || item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />

                {/* Remove Wishlist */}
                <button
                    onClick={() => toggleWishlist(item)}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md"
                    aria-label="Remove from wishlist"
                >
                    <Heart
                        size={21}
                        fill="currentColor"
                        className="text-pink-500"
                    />
                </button>

            </div>

            {/* Product Details */}
            <div className="mt-3 flex flex-col gap-2">

                <h3 className="text-base font-bold text-center font-['Playfair_Display']">
                    {item.name}
                </h3>

                <p className="text-pink-500 font-bold text-center">
                    ₹{Number(item.price).toFixed(2)}
                </p>

                <Link to={`/product/${item.id}`}>
                    <button className="w-full rounded-xl bg-pink-500 text-white py-2 font-semibold hover:bg-pink-600 transition">
                        View Product
                    </button>
                </Link>

            </div>

        </div>
    );
}

export default WishlistItem;