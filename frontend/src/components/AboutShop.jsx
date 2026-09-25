
import {Link} from "react-router-dom";
function AboutShop (){

    return(
        <>
            <div className="flex flex-col items-center ">
                <p className="text-2xl font-bold text-center mt-4 text-pink-400 mt-4" style={{ fontFamily: "Dancing Script, cursive" }}>Our Little Story... </p>
                <h1 className="text-4xl font-bold text-center font-['Playfair_Display']">About ShopWithSamy</h1>
                <Link to="/about"> <div className="bg-pink-100 text-black text-sm rounded-xl p-2 text-center mt-2">Learn More</div></Link>
            </div>
        </>
    );
}

export default AboutShop;