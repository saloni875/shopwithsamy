import Category from "../components/Category";
import Hero from "../components/Hero";
import OfferBanner from "../components/OfferBanner";



function Home() {


    return (
        <>
        <div className="home-container flex flex-col items-center justify-center bg-pink-00 mt-20">
            <p className="text-xl font-bold text-center mt-4 text-pink-400 mt-4" style={{ fontFamily: "Dancing Script, cursive" }}>Cute little things, made with love.</p>
            <h1 className="text-4xl font-bold text-center font-['Playfair_Display']">Welcome to ShopWithSamy</h1>

            {/*  */}
            
            
            <Hero/>

            <OfferBanner/>

            <Category />
             
        </div>
        
        
        </>
    );
}

export default Home;