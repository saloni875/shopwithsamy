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
                "Orders are usually processed within 2–3 business days. Delivery time may vary depending on your location.",
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
        <footer className="bg-pink-200  py-4 mt-auto">


            <div className="bg-pink-100 text-black mb-2 border border-pink-500">
                <section>

                    

                    <h4 className="cursor-pointer" onClick={() => setOpenSection(openSection === "faq" ? null : "faq")}>FQA</h4>


                    <div
                        className={`overflow-hidden  transition-all duration-300 ease-in-out bg-pink-400 ${openSection === "faq" ? "max-h-40" : "max-h-0"
                            }`}
                    >
                        <div> {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-pink-300 py-3">

                    <h4
                        className="cursor-pointer font-semibold"
                        onClick={() =>
                            setOpenFaq(
                                openFaq === faq.id ? null : faq.id
                            )
                        }
                    >
                        {faq.question}
                    </h4>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openFaq === faq.id
                                ? "max-h-40 mt-2"
                                : "max-h-0"
                        }`}
                    >
                        <p className="text-sm text-gray-600">
                            {faq.answer}
                        </p>
                    </div>

                </div>
            ))}
</div>
                    </div>


                </section>



                <section>
                    <h4> INFORMATION</h4>
                </section>

                <section>
                    <h4>CONTACT US</h4>
                </section>

                <section>
                    <h4>FOLLOW US</h4>
                </section>
            </div>


            <div className="container m-3 mx-auto text-center">
                <p className="text-gray-700 ">&copy; {new Date().getFullYear()} ShopWithSamy. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;