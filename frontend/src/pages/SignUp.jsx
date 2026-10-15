import React, { useState } from "react";
function SignUP(){

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return(

        <div className="home-container flex flex-col items-center justify-center mt-20">
            

            
            <p className="text-2xl font-bold text-center mt-4 text-pink-400 mt-4" style={{ fontFamily: "Dancing Script, cursive" }}>Join us for your little thing!</p>
            <h2 className="text-4xl font-bold text-center font-['Playfair_Display']">ShopWithSamy</h2>

            <form formAction="/signup" method="POST" className="flex flex-col  justify-center w-[90%] max-w-sm  rounded-2xl mb-4 shadow-md bg-pink-50  border border-pink-200 mt-8 p-4 ">

            <div>
            <label htmlFor="fullName" className="text-lg font-semibold text-pink-600 mt-2">FullName:</label>
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" name="fullName" id="fullName" placeholder="Enter your full name" className="w-full p-2 rounded-md border border-pink-300 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent" required />
            </div>

            <div>
            <label htmlFor="email" className="text-lg font-semibold text-pink-600 mt-2">Email Address:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Enter your email" className="w-full p-2 rounded-md border border-pink-300 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent" required />
            </div>

            <label htmlFor="password" className="text-lg font-semibold text-pink-600 mt-2">Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Enter your password" className="w-full p-2 rounded-md border border-pink-300 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent" required />

            <label htmlFor="confirmPassword" className="text-lg font-semibold text-pink-600 mt-2">Confirm Password:</label>
            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" className="w-full p-2 rounded-md border border-pink-300 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent" required />

            <button type="submit" className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-md mt-4 hover:bg-pink-600 transition-colors">Sign Up</button>

            <div className="flex items-center justify-center w-full mt-4">
                <hr className="w-full border-pink-300" />
                <span className="px-4 text-pink-600 font-semibold">or</span>
                <hr className="w-full border-pink-300" />
            </div>
            <button className="bg-white text-pink-500 font-semibold py-2 px-4 rounded-md mt-4 border border-pink-300 hover:bg-pink-100 transition-colors">
                Continue With Google
            </button>
            <p className="text-sm text-gray-600 mt-2 flex items-center justify-center">Already have an account? <a href="/login" className="text-pink-500 hover:underline">Log in</a></p>










            </form>
        </div>
    );
}

export default SignUP;