import { useState, useEffect } from "react";

function Hero() {
    const images = [
        "https://images.unsplash.com/photo-1707222611241-f82551eba008?auto=format&fit=crop&w=1920&h=700&q=80",
        "https://images.unsplash.com/photo-1749027886921-606b713795a1?auto=format&fit=crop&w=1920&h=700&q=80",
        "https://images.unsplash.com/photo-1668365179846-3333fe14f552?auto=format&fit=crop&w=1920&h=700&q=80",
        "https://images.unsplash.com/photo-1720159840331-572c324d87e5?auto=format&fit=crop&w=1920&h=700&q=80",
        "https://images.unsplash.com/photo-1769116416517-594639a769a7?auto=format&fit=crop&w=1920&h=700&q=80",

    ];

    const [currentImage, sertCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            sertCurrentImage(prev => (prev + 1) % images.length);
        }, 6000);

        return () => clearInterval(timer);


    }, []);


    return (
        <div className="hero-img mt-2 overflow-hidden">

                <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{
                        transform: `translateX(-${currentImage * 100}%)`
                    }}
                >
                {images.map((image, index) => {
                    return (
                        <img
                                src={image}
                                key={index}
                                className="w-full shrink-0 object-cover"
                            />
                    );
                })
                }
            </div>
{/* 
            <div className="mt-4 p-10  text-center text-2xl">
                <img src="bts.gif" alt="image" className=" object-cover" />
            </div> */}
        </div>
    );
}

export default Hero;