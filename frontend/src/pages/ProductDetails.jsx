import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
function ProductDetails() {
    const { id } = useParams();

    const [selectImage, setSelectImage] = useState(products[0].images[0]);
    const [selectedColor, setSelectedColor] = useState(products[0].colors[0]);
    const [openSection, setOpenSection] = useState(null);

    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        return <h2 className="h-screen flex items-center justify-center">Product not found</h2>;
    }

    return (
        <div className=" bg-white mt-20 w-full  ">
            {/* images... */}
            <div className="lg:mt-4 flex flex-col gap-2 justify-center items-center">
                {/* Main Image */}
                <img
                    src={selectImage}
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-lg"
                />

                {/* Thumbnails */}
                <div className="flex gap-3 overflow-x-auto w-[90%] justify-start mt-3 shrink-0">
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            onClick={() => setSelectImage(image)}
                            className={`w-20 h-20 object-cover rounded-lg shrink-0 cursor-pointer border-2
            ${selectImage === image ? 'border-black' : 'border-transparent'}`}
                        />
                    ))}
                </div>
            </div>


            <div className="lg:mt-4 ">
                <div className="flex flex-col justify-center items-center mb-4">

                    <h2 className="text-2xl font-semibold font-['Playfair_Display'] text-black"> {product.name}</h2>

                    <p className="text-xl font-semibold mt-2 text-pink-600">₹{product.price.toFixed(2)}</p>
                </div>

                <div className="flex flex-col justify-center items-center font-['Playfair_Display'] ">

                    <div> <span className="font-bold text-lg">Colour:</span>
                        {product.colors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}

                                className="inline-block bg-pink-100 cursor-pointer rounded-xl py-1 px-3 mr-2 ml-1 hover:bg-pink-400"
                            >
                                {color}
                            </button>
                        ))}
                    </div>


                    <div className="text-green-700 font-bold text-lg mt-2">{product.quantity} in stock</div>

                    {/* description and details */}

                    <div className="mt-6 w-full ">

                        {/* Description */}
                        <div className="border-b border-pink-200 m-2 bg-gradient-to-r from-pink-100 via-pink-50 to-pink-200  ">
                            <button
                                onClick={() =>
                                    setOpenSection(
                                        openSection === "description" ? null : "description"
                                    )
                                }
                                className="flex w-full items-center justify-between py-4 p-2 text-left font-semibold"
                            >
                                <span className="text-xl">Description</span>
                                <span>
                                    {openSection === "description" ? "⌃" : "⌄"}
                                </span>
                            </button>

                            {openSection === "description" && (
                                <div className="pb-4 p-2 bg-pink-200 border border-pink-300 ">
                                    <p>{product.description}</p>
                                </div>
                            )}

                        </div>


                        {/* Product Details */}
                        <div className="border-b border-pink-200 m-2 bg-gradient-to-r from-pink-100 via-pink-50 to-pink-200  ">

                            <button
                                onClick={() =>
                                    setOpenSection(
                                        openSection === "details" ? null : "details"
                                    )
                                }
                                className="flex w-full items-center p-2 justify-between py-4 text-left font-semibold"
                            >
                                <span className="text-xl">Product Details</span>
                                <span>
                                    {openSection === "details" ? "⌃" : "⌄"}
                                </span>
                            </button>

                            {openSection === "details" && (
                                <div className="pb-4 p-2 bg-pink-200 border border-pink-300 ">
                                    <p>{product.details}</p>
                                </div>
                            )}

                        </div>

                    </div>
                </div>

                <div className="flex justify-between p-2 m-4 items-center font-['Playfair_Display'] gap-2">
                    <button className="w-full  rounded-xl bg-pink-500 text-white py-2 px-3 font-semibold hover:bg-pink-600 transition">Add to Cart</button>
                    <button className="w-full  rounded-xl border border-pink-400 text-black-500 py-2 px-3 font-semibold hover:bg-pink-300 transition">Buy Now</button>
                </div>
            </div>


        </div>
    );
}

export default ProductDetails;