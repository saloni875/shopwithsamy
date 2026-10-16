import React from "react";

function Login(){

    const[email, setEmail] = React.useState("");
    const[password, setPassword] = React.useState("");


    return(
        <div className="home-container flex flex-col items-center justify-center mt-20">
            <p className="text-2xl font-bold text-center mt-4 text-pink-400 mt-4" style={{ fontFamily: "Dancing Script, cursive" }}>Join us for your little thing!</p>
          
            <h1 className="text-4xl font-bold text-center font-['Playfair_Display']">Login to ShopWithSamy</h1>
            <form className="flex flex-col  justify-center w-[90%] max-w-sm  rounded-2xl mb-4 shadow-md bg-pink-50  border border-pink-200 mt-8 p-4 ">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email:
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 px-4 py-2" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password:
                    </label>
                    <input 
                        type="password" 
                        id="password" 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 px-4 py-2" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="flex justify-center items-center mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;