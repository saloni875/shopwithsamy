

function CategoryItem({ category }) {

    return (
        <>
            <div className="overflow-hidden rounded-2xl   w-full p-2 ">
                <div className="w-full  cursor-pointer aspect-square ">
                    <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl p-1" />
                </div>
                <p className="text-xl  font-bold  text-pink-500 text-center  sm:text-2xl ">{category.name}</p>


            </div>

        </>
    );
}

export default CategoryItem;