import { Sparkles, Store } from "lucide-react";

import { Link } from "react-router-dom";



function About() {




    return (
        <>

            <div className="w-[94%] sm:w-[90%] lg:w-[85%] max-w-6xl mx-auto py-3 sm:py-6 lg:py-6 px-3 sm:px-4 lg:px-8 mt-15">

                <div className="w-[75%] mx-auto">
                    <h3 className=" text-2xl font-bold text-center mt-4 text-pink-400 " style={{ fontFamily: "Dancing Script, cursive" }}>Out little story</h3>

                    <p className="text-xl lg:text-2xl font-bold text-center font-['Playfair_Display'] mb-2">ShopWithSamy started as a tiny idea and a big love for cute, handmade things. Every charm, clip and bracelet is chosen and packed by hand, with a lot of care and a little bit of magic. We're a small business - which means every single order genuinely means the world to us. Thank you for being here, and for being part of our little story. ♡</p></div>


                <div className="w-full max-w-sm mx-auto bg-gradient-to-r from-pink-200 rounded-2xl shadow-md p-6 sm:p-8 text-center m-4 ">

                    <div className="flex justify-center mb-5">
                        <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center">
                            <Sparkles size={32} />
                        </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display']">
                        Cute & Affordable
                    </h3>

                    <p
                        className="text-xl sm:text-2xl text-pink-400 mt-5"
                        style={{ fontFamily: "Dancing Script, cursive" }}
                    >
                        Aesthetic little things that won't break the bank.
                    </p>
                </div>

                <div className="w-full max-w-sm mx-auto bg-gradient-to-l from-pink-200 rounded-2xl shadow-md p-6 sm:p-8 text-center">
                    <div className="flex justify-center mb-5">
                        <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center">
                            <Store size={32} />
                        </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display']">
                        Small Business
                    </h3>

                    <p
                        className="text-xl sm:text-2xl text-pink-400 mt-5"
                        style={{ fontFamily: "Dancing Script, cursive" }}
                    >
                        Your order genuinely supports a tiny dream. Thank you ♡
                    </p>
                </div>


                <div className="w-[80%] mx-auto mt-4 ">
                    <h3 className="text-3xl font-bold text-center font-['Playfair_Display']">thank you for being here</h3>

                    <p className="text-2xl font-bold text-center mt-4 text-pink-400 mt-4" style={{ fontFamily: "Dancing Script, cursive" }}>Every order means a little more to a small business like ours. Thank you for supporting ShopWithSamy and being part of our journey. ♡</p>
                    <Link to="/category" className="block">
                        <div className="bg-pink-200 h-[2.2rem] w-[40%] md:w-[20%] mx-auto text-black text-sm rounded-xl p-2 text-center mt-4 cursor-pointer">
                            Shop Now
                        </div>
                    </Link>


                </div>



            </div>
        </>
    )
}

export default About;