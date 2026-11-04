import { useState } from "react";
import { Mail, MessageCircle, Clock } from "lucide-react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Contact form submitted:", formData);

        alert("Thank you for contacting ShopWithSamy!");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    return (
        <div className="w-full bg-white min-h-screen">

            {/* Hero */}
            <section className="bg-gradient-to-r from-pink-100 to-pink-200 px-5 py-16 text-center mt-16">
                <p className="text-pink-600 uppercase tracking-[3px] text-sm mb-3">
                    We'd love to hear from you
                </p>

                <h1 className="text-4xl sm:text-5xl font-bold font-['Playfair_Display'] text-gray-900">
                    Get In Touch
                </h1>

                <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                    Have a question about your order, our products, or
                    just want to say hello? We're always happy to help.
                </p>
            </section>

            {/* Contact Content */}
            <section className="max-w-6xl mx-auto px-5 py-14">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Information */}
                    <div>
                        <p className="text-pink-500 uppercase tracking-widest text-sm font-semibold">
                            Contact Information
                        </p>

                        <h2 className="text-3xl font-bold mt-3 font-['Playfair_Display']">
                            Let's Talk!
                        </h2>

                        <p className="text-gray-500 mt-4 leading-relaxed">
                            Whether you need help choosing the perfect accessory
                            or have a question about an existing order, reach out
                            to us.
                        </p>

                        <div className="mt-9 space-y-6">

                            <div className="flex items-start gap-4">
                                <div className="bg-pink-100 p-3 rounded-xl">
                                    <Mail className="text-pink-600" />
                                </div>

                                <div>
                                    <h3 className="font-bold">Email Us</h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        support@shopwithsamy.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-pink-100 p-3 rounded-xl">
                                    <MessageCircle className="text-pink-600" />
                                </div>

                                <div>
                                    <h3 className="font-bold">Customer Support</h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Have questions? Send us a message.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-pink-100 p-3 rounded-xl">
                                    <Clock className="text-pink-600" />
                                </div>

                                <div>
                                    <h3 className="font-bold">Support Hours</h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Monday – Saturday
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-pink-100 p-3 rounded-xl">
                                    <Instagram className="text-pink-600" />
                                </div>

                                <div>
                                    <h3 className="font-bold">Follow Us</h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Find us on Instagram for new collections.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-pink-50 rounded-3xl p-6 sm:p-8">

                        <h2 className="text-2xl font-bold font-['Playfair_Display']">
                            Send Us A Message
                        </h2>

                        <p className="text-gray-500 text-sm mt-2 mb-7">
                            Fill out the form below and we'll get back to you.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full p-3 rounded-xl border border-pink-200 bg-white outline-none focus:ring-2 focus:ring-pink-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full p-3 rounded-xl border border-pink-200 bg-white outline-none focus:ring-2 focus:ring-pink-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What is this about?"
                                    required
                                    className="w-full p-3 rounded-xl border border-pink-200 bg-white outline-none focus:ring-2 focus:ring-pink-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Your Message
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    rows="5"
                                    required
                                    className="w-full p-3 rounded-xl border border-pink-200 bg-white outline-none focus:ring-2 focus:ring-pink-300 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold transition"
                            >
                                Send Message →
                            </button>

                        </form>

                    </div>

                </div>
            </section>

            {/* Bottom Section */}
            <section className="bg-pink-50 py-12 px-5 text-center">

                <h2 className="text-2xl font-bold font-['Playfair_Display']">
                    Frequently Asked Questions
                </h2>

                <p className="text-gray-500 mt-3">
                    Looking for quick answers about orders, shipping or returns?
                </p>

                <a
                    href="/#faq"
                    className="inline-block mt-5 text-pink-600 font-semibold underline"
                >
                    Visit Our FAQ →
                </a>

            </section>

        </div>
    );
}

export default Contact;