import { useState } from "react";

function Footer() {



    const [openSection, setOpenSection] = useState(null);

    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "How do I place an order?",
            answer:
                "Choose the products you love, add them to your cart, and follow the checkout instructions to place your order.",
        },
        {
            id: 2,
            question: "How long does shipping take?",
            answer:
                "Orders are usually processed within 7-8 business days. Delivery time may vary depending on your location.",
        },
        {
            id: 3,
            question: "Do you offer returns or exchanges?",
            answer:
                "Yes, eligible products can be returned or exchanged according to our return and exchange policy.",
        },
        {
            id: 4,
            question: "How can I track my order?",
            answer:
                "Once your order has been shipped, you will receive tracking details through the contact information provided during checkout.",
        },
        {
            id: 5,
            question: "How can I contact you?",
            answer:
                "You can contact us through WhatsApp or our social media pages. We will be happy to help.",
        },
    ];

    return (

        <>
            <footer className="bg-pink-100 py-3 mt-auto">

                {/* for mobile */}

                <div className="block lg:hidden">

                    {/* FAQ Section */}
                    <div className="bg-pink-100 text-black mb-2 border-b border-pink-300">
                        <h4
                            className="flex items-center justify-between cursor-pointer cursor-pointer p-3 font-bold w-full text-center font-['Playfair_Display']"
                            onClick={() => setOpenSection(openSection === "faq" ? null : "faq")}
                        >
                            FAQ <span className="ml-auto mr-4">
                                {openSection === "faq" ? "⌃" : "⌄"}
                            </span>
                        </h4>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === "faq" ? "max-h-90" : "max-h-0"}`}>
                            <div className="bg-pink-200 p-3 flex flex-col items-center">
                                {faqs.map((faq) => (
                                    <div key={faq.id} className="border-b border-pink-300 py-3 w-full max-w-xl text-center">
                                        <h4 className="cursor-pointer font-semibold text-lg font-['Playfair_Display']" onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}>
                                            {faq.question}
                                        </h4>
                                        <div className={`overflow-hidden transition-all duration-300 ${openFaq === faq.id ? "max-h-80 mt-2" : "max-h-0"}`}>
                                            <p className="text-xl text-pink-700 bold " style={{ fontFamily: "Dancing Script, cursive" }}>{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Information */}
                    <div className="text-center border-b border-pink-300 py-3">
                        <h4 className="flex items-center p-2 justify-between cursor-pointer font-bold font-['Playfair_Display']" onClick={() => setOpenSection(openSection === "information" ? null : "information")}>
                            INFORMATION <span className="ml-auto mr-4">
                                {openSection === "information" ? "⌃" : "⌄"} </span>
                        </h4>
                        {openSection === "information" && <div className="mt-2">
                            <div className="space-y-3">
                            <p className="cursor-pointer hover:text-pink-600">
                                Privacy Policy
                            </p>

                            <p className="cursor-pointer hover:text-pink-600">
                                Terms & Conditions
                            </p>

                            <p className="cursor-pointer hover:text-pink-600">
                                Return & Shipping Policy
                            </p>
                            </div>
                            </div>}
                    </div>

                    {/* Contact */}
                    <div className="text-center border-b border-pink-300 py-3">
                        <h4 className="flex items-center p-2 justify-between cursor-pointer font-bold font-['Playfair_Display']" onClick={() => setOpenSection(openSection === "contact" ? null : "contact")}>
                            CONTACT US<span className="ml-auto mr-4">
                                {openSection === "contact" ? "⌃" : "⌄"} </span>
                        </h4>
                        {openSection === "contact" && <div className="mt-2">
                            <div className="space-y-3">
                            <p className="cursor-pointer hover:text-pink-600">
                                Shop
                            </p>

                            <p className="cursor-pointer hover:text-pink-600">
                                All Products
                            </p>

                            <p className="cursor-pointer hover:text-pink-600">
                                Contact Us
                            </p>
                        </div>
                            </div>}
                    </div>

                    {/* Follow Us */}
                    <div className="text-center border-b border-pink-300 py-3">
                        <h4 className="flex items-center p-2 justify-between cursor-pointer font-bold font-['Playfair_Display']" onClick={() => setOpenSection(openSection === "follow-us" ? null : "follow-us")}>
                            FOLLOW US <span className="ml-auto mr-4">
                                {openSection === "follow-us" ? "⌃" : "⌄"} </span>
                        </h4>
                        {openSection === "follow-us" && <div className="mt-2">
                            <div className="space-y-3">
                            <p className="cursor-pointer hover:text-pink-600">
                                Instagram
                            </p>

                            <p className="cursor-pointer hover:text-pink-600">
                                YouTube
                            </p>

                            <p className="cursor-pointer hover:text-pink-600">
                                Facebook
                            </p>
                        </div>
                            </div>}
                    </div>


                </div>


                {/* for desktop */}

                {/* Desktop Footer */}
                <div className="hidden lg:grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-8 py-8 text-gray-800">

                    {/* FAQ */}
                    <div>
                        <h3 className="text-xl font-bold font-['Playfair_Display'] mb-4">
                            FAQ
                        </h3>

                        <div className="space-y-3">
                            {faqs.map((faq) => (
                                <div key={faq.id}>

                                    <p
                                        onClick={() =>
                                            setOpenFaq(openFaq === faq.id ? null : faq.id)
                                        }
                                        className="text-sm cursor-pointer hover:text-pink-600"
                                    >
                                        {faq.question}
                                    </p>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openFaq === faq.id
                                                ? "max-h-80 mt-2"
                                                : "max-h-0"
                                            }`}
                                    >
                                        <p
                                            className="text-sm text-pink-700 "

                                        >
                                            {faq.answer}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Information */}
                    <div>
                        <h3 className="text-xl font-bold font-['Playfair_Display'] mb-4">
                            INFORMATION
                        </h3>

                        <div className="space-y-3">
                            <p className="cursor-pointer hover:text-pink-600">
                                Privacy Policy
                            </p>

                            <p className="cursor-pointer hover:text-pink-600">
                                Terms & Conditions
                            </p>

                            <p className="cursor-pointer hover:text-pink-600">
                                Return & Shipping Policy
                            </p>
                        </div>
                    </div>


                    {/* Contact / Shop */}
                    <div>
                        <h3 className="text-xl font-bold font-['Playfair_Display'] mb-4">
                            SHOP / CONTACT
                        </h3>

                        <div className="space-y-3">
                            <p className="cursor-pointer hover:text-pink-600">
                                Shop
                            </p>

                            <p className="cursor-pointer hover:text-pink-600">
                                All Products
                            </p>

                            <p className="cursor-pointer hover:text-pink-600">
                                Contact Us
                            </p>
                        </div>
                    </div>


                    {/* Follow Us */}
                    <div>
                        <h3 className="text-xl font-bold font-['Playfair_Display'] mb-4">
                            FOLLOW US
                        </h3>

                        <div className="space-y-3">
                            <p className="cursor-pointer hover:text-pink-600">
                                Instagram
                            </p>

                            <p className="cursor-pointer hover:text-pink-600">
                                YouTube
                            </p>

                            <p className="cursor-pointer hover:text-pink-600">
                                Facebook
                            </p>
                        </div>
                    </div>

                </div>

                <div className="mx-auto text-center mt-4">
                    <p className="text-gray-700">&copy; {new Date().getFullYear()} ShopWithSamy. All rights reserved.</p>
                </div>
            </footer>

        </>
    );
}

export default Footer;