function LittleThingsCard ({icon:Icon, text, title}){

    return(

        <>
       <div className="w-full max-w-sm bg-white rounded-2xl shadow-md mt-3 overflow-hidden">
    <div className="p-6">

        <div className="flex justify-center items-center rounded-full bg-pink-200 w-10 h-10 text-black">
            <Icon />
        </div>

        <p className="text-2xl font-bold text-center font-['Playfair_Display']">
            {title}
        </p>

        <p
            className="text-xl font-bold text-center mt-4 text-pink-400"
            style={{ fontFamily: "Dancing Script, cursive" }}
        >
            {text}
        </p>

    </div>
</div>
        
        </>
    );
}
export default LittleThingsCard;