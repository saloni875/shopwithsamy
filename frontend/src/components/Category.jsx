import CategoryItem from "./CategoryItem";

function Category() {

    const categories = [
        {
            href: "jewelry",
            name: "Jewelry",
            imageUrl: "img.png",
        },
        {
            href: "jewelry",
            name: "Jewelry",
            imageUrl: "img.png",
        },
        {
            href: "jewelry",
            name: "Jewelry",
            imageUrl: "img.png",
        },
        {
            href: "jewelry",
            name: "Jewelry",
            imageUrl: "img.png",
        },
        {
            href: "jewelry",
            name: "Jewelry",
            imageUrl: "img.png",
        },
        {
            href: "jewelry",
            name: "Jewelry",
            imageUrl: "img.png",
        },
    ]

    return (
        <>

          <p className="text-xl font-bold text-center mt-4 text-pink-400 mt-4" style={{ fontFamily: "Dancing Script, cursive" }}>Handmade & affordable - Find Your New Favourite Things</p>

          <h2 className="text-3xl font-bold text-center font-['Playfair_Display']">Shop By Category</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-6 p-2">
            {categories.map(category => (
                <CategoryItem 
                    category={category}
                    key={category.name}
                />
            ))}
        </div>

        </>
    )
}

export default Category;
