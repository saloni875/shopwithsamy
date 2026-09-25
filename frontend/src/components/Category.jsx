import CategoryItem from "./CategoryItem";

function Category() {

    const categories = [
        {
            href: "phone-charm",
            name: "Phone Charm",
            imageUrl: "phone-charm.jpeg",
        },
        {
            href: "hair-accessories",
            name: "Hair Accessories",
            imageUrl: "hair-accessories.jpeg",
        },
        {
            href: "jewelry",
            name: "Jewelry",
            imageUrl: "img.png",
        },
        {
            href: "clutches",
            name: "Clutches",
            imageUrl: "clutches.jpeg",
        },
        {
            href: "handmade",
            name: "Handmade",
            imageUrl: "https://images.unsplash.com/photo-1741980983723-09c2051e8b1e?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
        },
        {
            href: "gifts",
            name: "Gifts",
            imageUrl: "https://images.unsplash.com/photo-1592903297149-37fb25202dfa?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
        },
    ]

    return (
        <>

          <p className="text-2xl font-bold text-center mt-4 text-pink-400 mt-4" style={{ fontFamily: "Dancing Script, cursive" }}>Handmade & affordable - Find Your New Favourite Things</p>

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
