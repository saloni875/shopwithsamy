import AboutShop from "../components/AboutShop";
import Category from "../components/Category";
import Hero from "../components/Hero";
import LitteleThings from "../components/LittleThings";
import OfferBanner from "../components/OfferBanner";
import Review from "../components/Review";



function Home() {


    return (
        <>
        <div className="home-container flex flex-col items-center justify-center bg-pink-00 mt-20">
            <p className="text-2xl font-bold text-center mt-4 text-pink-400 mt-4" style={{ fontFamily: "Dancing Script, cursive" }}>Cute little things, made with love.</p>
            <h1 className="text-4xl font-bold text-center font-['Playfair_Display']">Welcome to ShopWithSamy</h1>

            {/*  */}
            
            
            <Hero/>

            <OfferBanner/>

            <Category />

            <LitteleThings/>

            <AboutShop/>

            <Review/>


            <div className="flex flex-col items-center justify-center w-[90%] max-w-sm  rounded-2xl mb-4 shadow-md bg-gradient-to-r from-pink-200 to-white border border-pink-200 mt-8 p-4 ">
                <a href="https://www.instagram.com/shopwithsamy" className="text-xl font-bold text-center mt-4 text-pink-400 mt-4" style={{ fontFamily: "Dancing Script, cursive" }}>@ShopWithSamy</a>

                <h3 className="text-3xl font-bold text-center font-['Playfair_Display']">Come Say Hi on Instagram</h3>

                <p className="text-xl font-bold text-center mt-4 text-pink-400 mt-4" style={{ fontFamily: "Dancing Script, cursive" }}>Follow along for new drops, updates & little giveaways. ♡</p>

                <a href="https://www.instagram.com/shopwithsamy"> <div className="bg-pink-200 text-black text-sm rounded-2xl border border-pink-300 p-2 text-center mt-2 tracking-widest">Follow Us</div> </a>

            </div>
             
        </div>
        
        
        </>
    );
}

export default Home;