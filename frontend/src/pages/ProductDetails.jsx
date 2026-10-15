import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return <h2 className="h-screen flex items-center justify-center">Product not found</h2>;
    }

    // FIX: Use product's own images, not products[0]
    const [selectImage, setSelectImage] = useState(product.images[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [openSection, setOpenSection] = useState("description");

    return (
        <div className="bg-white mt-20 w-full max-w-6xl mx-auto lg:flex lg:gap-10 lg:p-6">

            {/* --- LEFT: IMAGES --- */}
            <div className="lg:w-1/2 flex flex-col gap-2 items-center">
                <img
                    src={selectImage}
                    alt={product.name}
                    className="w-full h-[380px] lg:h-[500px] object-cover rounded-xl"
                />

                {/* Thumbnails - FIXED for 10+ images */}
                <div className="flex gap-2.5 overflow-x-auto w-full px-3 mt-3
                                scrollbar-hide scroll-smooth pb-2">
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            onClick={() => setSelectImage(image)}
                            className={`w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-lg shrink-0 cursor-pointer border-2 transition-all
                            ${selectImage === image? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'}`}
                        />
                    ))}
                </div>
            </div>

            {/* --- RIGHT: INFO --- */}
            <div className="lg:w-1/2 px-3 lg:px-0">
                <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0">
                    <h2 className="text-2xl font-semibold font-['Playfair_Display']">{product.name}</h2>
                    <p className="text-xl font-bold mt-2 text-pink-600">₹{product.price.toFixed(2)}</p>

                    {/* Colour */}
                    <div className="mt-4 flex items-center gap-2">
                        <span className="font-bold">Colour:</span>
                        <div className="flex gap-2">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`rounded-full py-1 px-4 text-sm capitalize border transition
                                    ${selectedColor === color? 'bg-pink-500 text-white border-pink-500' : 'bg-pink-50 border-pink-200 hover:bg-pink-100'}`}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="text-green-700 font-bold text-sm mt-3">{product.quantity} in stock</div>
                </div>

                {/* Description & Details - FIXED: No heavy pink */}
                <div className="mt-6 w-full">
                    {/* Description */}
                    <div className="border-b">
                        <button
                            onClick={() => setOpenSection(openSection === "description"? null : "description")}
                            className="flex w-full items-center justify-between py-4 text-[1.2rem] font-semibold font-['Playfair_Display']"
                        >
                            <span>Description</span>
                            <span className={`transition ${openSection === "description"? "rotate-180" : ""}`}>⌄</span>
                        </button>
                        {openSection === "description" && (
                            <div className="pb-4 text-xl text-gray-700 bg-pink-100 p-4 text-[1.1rem] leading-relaxed">
                                <p>{product.description}</p>
                            </div>
                        )}
                    </div>

                    {/* Product Details */}
                    <div className="border-b">
                        <button
                            onClick={() => setOpenSection(openSection === "details"? null : "details")}
                            className="flex w-full items-center justify-between py-4 text-[1.2rem] font-semibold font-['Playfair_Display']"
                        >
                            <span>Product Details</span>
                            <span className={`transition ${openSection === "details"? "rotate-180" : ""} text-[1.1rem]`}>⌄</span>
                        </button>
                        {openSection === "details" && (
                            <div className="pb-4 text-xl text-gray-700 bg-pink-100 p-4 leading-relaxed">
                                <p>{product.details}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-8 sticky bottom-2 bg-white p-2 lg:p-0">
                    <button className="w-full rounded-full bg-pink-500 text-white py-3 font-bold hover:bg-pink-600 transition">Add to Cart</button>
                    <button className="w-full rounded-full border border-pink-500 font-['Playfair_Display'] py-3 font-bold hover:bg-pink-100 hover:text-pink-700 transition">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;