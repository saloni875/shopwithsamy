import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";


function CategoryProduct() {

    const { categoryName } = useParams();
    console.log(categoryName);

    const products = [
        {
            id: 1,
            name: "cute phone charm",
            price: 299,
            category: "Phone Charm",
            image: "/img.png"
        },
        {
            id: 2,
            name: "Cute Hair Clip",
            price: 199,
            category: "Hair Accessories",
            image: "/logo.jpeg"
        },
        {
            id: 3,
            name: "Mini Clutch",
            price: 499,
            category: "Clutches",
            image: "..."
        },
        {
            id: 4,
            name: "handmade-stuff",
            price: 249,
            category: "Handmade",
            image: "..."
        },
        {
            id: 5,
            name: "Cute Gift Set",
            price: 599,
            category: "Gifts",
            image: "..."
        },
        {
            id: 6,
            name: "Necklace",
            price: 399,
            category: "Jewelry",
            image: "..."
        }
        ,
        {
            id: 7,
            name: "cute phone charm",
            price: 299,
            category: "Phone Charm",
            image: "..."
        },
        {
            id: 8,
            name: "Cute Hair Clip",
            price: 199,
            category: "Hair Accessories",
            image: "..."
        },
        {
            id: 9,
            name: "Mini Clutch",
            price: 499,
            category: "Clutches",
            image: "..."
        },
        {
            id: 10,
            name: "Phandmade stuff",
            price: 249,
            category: "Handmade",
            image: "..."
        },
        {
            id: 11,
            name: "Cute Gift Set",
            price: 599,
            category: "Gifts",
            image: "..."
        },
        {
            id: 12,
            name: "Necklace",
            price: 399,
            category: "Jewelry",
            image: "..."
        }
    ];

    const categoryProducts = products.filter(product => product.category === categoryName);

    return (


        <>

            <div className="w-full  bg-white  mt-16">
                <h1 className="text-4xl font-bold text-center font-['Playfair_Display']">{categoryName}</h1>
                <p className="text-2xl font-bold text-center  text-pink-400 4 m-4" style={{ fontFamily: "Dancing Script, cursive" }}> soon peoduct will be added</p>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                    {categoryProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image} />

                    ))}
                </div>

                <Link to="/category">
                    <div className="w-full h-[70px] lg:h-[90px] items-center  bg-pink-500 my-4 mt-4 flex justify-center ">
                        <p className="text-[1rem] lg:text-2xl text-center text-white font-['Playfair_Display'] cursor-pointer m-4 ">
                            ← Back To Category
                        </p>
                    </div>
                </Link>
            </div>

        </>
    );
}
export default CategoryProduct;