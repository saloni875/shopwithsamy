import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
function ProductCard({ id, name, price, image, wishlistItems = [], toggleWishlist }) {

    const isInWishlist = wishlistItems.some((item) => item.id === id);
    return (

        <>


            <div className="  w-full  bg-white rounded-2xl  flex flex-col overflow-hidden p-2">
                <div className="w-full aspect-square bg-pink-100 rounded-xl relative">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full rounded-xl object-cover"
                    />

                    <button
                        onClick={() => toggleWishlist({ id, name, price, image })}
                        className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition"
                        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                    >
                        <Heart
                            size={22}
                            className={isInWishlist ? "text-pink-600 fill-pink-600" : "text-gray-700"}
                            fill={isInWishlist ? "currentColor" : "none"}
                        />
                    </button>
                </div>

                <p className="text-[1.2rem] sm:text-2xl font-bold text-center text-black-500 font-['Playfair_Display']">{name}</p>
                <p className="text-[1rem] font-bold text-center text-pink-500 font-['Playfair_Display']">{price.toFixed(2)}</p>

                <div className="flex flex-col gap-2 mt-3">
                    {/* <Link to="/cart">
                        <button className="w-full rounded-xl bg-pink-500 text-white py-1 px-2 font-semibold hover:bg-pink-600 transition">
                            Add To Cart
                        </button>
                    </Link> */}

                    <Link to={`/product/${id}`}>
                        <button className="w-full rounded-xl border bg-pink-500 text-white py-1 px-2 font-semibold hover:bg-pink-700 transition">
                            See More...
                        </button>
                    </Link>
                </div>
            </div>



        </>
    );
}

export default ProductCard;