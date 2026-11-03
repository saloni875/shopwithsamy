import { Link } from "react-router-dom";
import WishlistItem from "../components/WishlistItem";

function Wishlist({ wishlistItems, toggleWishlist }) {

    return (
        <div className="w-full min-h-[60vh] bg-white mt-16 px-4 py-8">

            {wishlistItems.length === 0 ? (

                <div className="flex flex-col items-center justify-center text-center py-16">

                    <h2 className="text-2xl font-bold mb-4">
                        Your Wishlist is Empty
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Save your favourite products here!
                    </p>

                    <Link to="/category">
                        <button className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-xl font-semibold">
                            Start Shopping...
                        </button>
                    </Link>

                </div>

            ) : (

                <div className="w-full max-w-6xl mx-auto">

                    <h2 className="text-2xl font-bold mb-6 text-center">
                        My Wishlist
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                        {wishlistItems.map((item) => (
                            <WishlistItem
                                key={item.id}
                                item={item}
                                toggleWishlist={toggleWishlist}
                            />
                        ))}

                    </div>

                </div>

            )}

        </div>
    );
}

export default Wishlist;