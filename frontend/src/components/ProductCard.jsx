import {Link} from "react-router-dom";
function ProductCard({ id, name, price, image }) {


    return (

        <>


            <div className="  w-full  bg-white rounded-2xl  flex flex-col overflow-hidden p-2">
                <div className="w-full aspect-square bg-pink-100 rounded-xl">
                    <img src={image} alt={name} className="w-full h-full rounded-xl object-cover" />
                </div>

                <p className="text-[1.2rem] sm:text-2xl font-bold text-center text-black-500 font-['Playfair_Display']">{name}</p>
                <p className="text-[1rem] font-bold text-center text-pink-500 font-['Playfair_Display']">{price}</p>

                <div className="flex flex-col gap-2 mt-3">
                   <Link to="/cart">
                        <button className="w-full rounded-xl bg-pink-500 text-white py-1 px-2 font-semibold hover:bg-pink-600 transition">
                            Add To Cart
                        </button>
                    </Link>

                     <Link to={`/product/${id}`}>
                        <button className="w-full rounded-xl border border-pink-400 text-black-500 py-1 px-2 font-semibold hover:bg-pink-100 transition">
                            See More...
                        </button>
                    </Link>
                </div>
            </div>

          

        </>
    );
}

export default ProductCard;