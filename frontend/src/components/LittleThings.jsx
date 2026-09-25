
import { Heart, Sparkles, Store, Package } from "lucide-react";
import LittleThingsCard from "./LittleThingsCard";

function LitteleThings() {

    const features = [
        {
            icon: Heart,
            title: "Made with Love",
            text: "Every piece is chosen & packed by hand with lots of care."
        },
        {
            icon: Sparkles,
            title: "Cute & Affordable",
            text: "Aesthetic little things that won't break the bank."
        },
        {
            icon: Store,
            title: "Small Business",
            text: "Your order genuinely supports a tiny dream. Thank you ♡"
        },
        {
            icon: Package,
            title: "Carefully Packed",
            text: "Wrapped up pretty and ready to make you smile"
        },

    ];

    return (
        <>

            <div className="w-[90%]  bg-pink-100 rounded-2xl  m-2 p-8" >

                <div>

                    <p className="text-2xl font-bold text-center mt-4 text-pink-400 mt-4" style={{ fontFamily: "Dancing Script, cursive" }}>the little things</p>

                    <h2 className="text-3xl font-bold text-center font-['Playfair_Display']">Why Shop With Us?</h2>

                </div>
                
                <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
                    {features.map(feature => (
                        <LittleThingsCard  title={feature.title}
                        icon={feature.icon}
                        text={feature.text}
                        key={feature.title}/>
                    ))}
                </div>

            </div>

        </>
    );
}

export default LitteleThings;
