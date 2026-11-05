import { useState } from "react";
import { useLocation } from "react-router-dom";

function Checkout() {
    const location = useLocation();

    // Product/cart information will come from Product Details or Cart later
    const items = location.state?.items || [];

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        addressLine1: "",
        houseNo: "",
        city: "",
        state: "",
        pincode: "",
    });

    const [deliveryMethod, setDeliveryMethod] = useState("standard");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            customer: formData,
            deliveryMethod,
            items,
        });
    };

    return (
        <div className="w-full min-h-screen bg-white px-4 py-8 mt-16">

            <div className="max-w-xl mx-auto">

                {/* Heading */}
                 <h2 className="text-4xl font-bold text-center font-['Playfair_Display'] text-pink-600">ShopWithSamy</h2>
                <h3 className="text-3xl font-bold text-center font-['Playfair_Display'] mb-8">
                    Checkout
                </h3>


                <form onSubmit={handleSubmit} className="space-y-5">


                    {/*user INFORMATION  */}

                    <div>
                        <h2 className="text-2xl font-bold mb-5 text-pink-600" style={{ fontFamily: "Dancing Script, cursive" }}>
                            Delivery Information
                        </h2>

                        {/* Full Name */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Full Name <span className="text-pink-500">*</span>
                            </label>

                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-400"
                            />
                        </div>


                        {/* Phone Number */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Phone Number <span className="text-pink-500">*</span>
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-400"
                            />
                        </div>


                        {/* Address Line 1 */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Address Line 1 <span className="text-pink-500">*</span>
                            </label>

                            <input
                                type="text"
                                name="addressLine1"
                                value={formData.addressLine1}
                                onChange={handleChange}
                                placeholder="Street, area, locality"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-400"
                            />
                        </div>


                        {/* House Number / Building */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                House Number / Flat No. / Building / Street
                            </label>

                            <input
                                type="text"
                                name="houseNo"
                                value={formData.houseNo}
                                onChange={handleChange}
                                placeholder="House no., flat, building, street"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-400"
                            />
                        </div>


                        {/* City */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                City <span className="text-pink-500">*</span>
                            </label>

                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Enter your city"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-400"
                            />
                        </div>


                        {/* State */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                State <span className="text-pink-500">*</span>
                            </label>

                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="Enter your state"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-400"
                            />
                        </div>


                        {/* Pincode */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">
                                Pincode <span className="text-pink-500">*</span>
                            </label>

                            <input
                                type="text"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                placeholder="Enter your pincode"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-400"
                            />
                        </div>

                    </div>


                    {/* DELIV METHOD */}

                    <div className="pt-4">

                        <h2 className="text-xl font-bold mb-4">
                            Choose Delivery Method
                        </h2>

                        <div className="space-y-3">

                            {/* Standard */}
                            <label className="flex items-center gap-3 border border-gray-300 rounded-xl p-4 cursor-pointer">
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="standard"
                                    checked={deliveryMethod === "standard"}
                                    onChange={(e) =>
                                        setDeliveryMethod(e.target.value)
                                    }
                                />

                                <div>
                                    <p className="font-semibold">
                                        Standard Shipping
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Regular delivery
                                    </p>
                                </div>
                            </label>


                            {/* Speed Post */}
                            <label className="flex items-center gap-3 border border-gray-300 rounded-xl p-4 cursor-pointer">
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="speed"
                                    checked={deliveryMethod === "speed"}
                                    onChange={(e) =>
                                        setDeliveryMethod(e.target.value)
                                    }
                                />

                                <div>
                                    <p className="font-semibold">
                                        Speed Post
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Faster delivery
                                    </p>
                                </div>
                            </label>

                        </div>

                    </div>


                    {/*  ORDER SUMMARY*/}

                    <div className="border-t border-gray-200 pt-6">

                        <h2 className="text-xl font-bold mb-5">
                            Order Summary
                        </h2>

                        {items.length > 0 ? (

                            <div className="space-y-4">

                                {items.map((item) => (
                                    <div
                                        key={`${item.id}-${item.selectedColor || ""}`}
                                        className="flex gap-3 border-b border-gray-100 pb-4"
                                    >

                                        <img
                                            src={item.images?.[0] || item.image}
                                            alt={item.name}
                                            className="w-20 h-20 rounded-lg object-cover"
                                        />

                                        <div className="flex-1">

                                            <h3 className="font-semibold">
                                                {item.name}
                                            </h3>

                                            {item.selectedColor && (
                                                <p className="text-sm text-gray-500">
                                                    Colour: {item.selectedColor}
                                                </p>
                                            )}

                                            <p className="text-sm text-gray-500">
                                                Quantity: {item.quantity || 1}
                                            </p>

                                            <p className="font-semibold text-pink-500 mt-1">
                                                ₹{(
                                                    Number(item.price) *
                                                    (item.quantity || 1)
                                                ).toFixed(2)}
                                            </p>

                                        </div>

                                    </div>
                                ))}

                            </div>

                        ) : (

                            <p className="text-gray-500 text-sm">
                                No products selected.
                            </p>

                        )}

                    </div>


                    {/*PRICE*/}

                    <div className="border-t border-gray-200 pt-5 space-y-3">

                        <div className="flex justify-between">
                            <span>Product Total</span>
                            <span>₹0.00</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>₹0.00</span>
                        </div>

                        <div className="border-t pt-3 flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span className="text-pink-500">
                                ₹0.00
                            </span>
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold transition"
                    >
                        Place Order on WhatsApp
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Checkout;