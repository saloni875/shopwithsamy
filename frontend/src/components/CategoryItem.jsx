import { Link } from "react-router-dom";

function CategoryItem({ category }) {

    return (
        <>
        <Link to={`/category/${category.name}`} >
            <div className="overflow-hidden rounded-2xl   w-full p-2 ">
                <div className="w-full  cursor-pointer aspect-square ">
                    <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl p-1" />
                </div>
                <p  className="text-xl sm:text-2xl font-bold text-center text-pink-500 font-['Playfair_Display']">{category.name}</p>


            </div>
        </Link>

        </>
    );
}

export default CategoryItem;