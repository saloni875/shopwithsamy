function Wishlist({ wishlistItems = [], toggleWishlist }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      {wishlistItems.length === 0 ? (
        <>
          <p className="text-lg mb-4">Your wishlist is empty</p>
          <a href="/category" className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md">
            Start Shopping...
          </a>
        </>
      ) : (
        <div className="w-full max-w-6xl">
          <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {wishlistItems.map((item) => (
              <li key={item.id} className="border p-4 rounded">
                {item.name}
                <button 
                  onClick={() => toggleWishlist(item)}
                  className="ml-2 text-pink-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Wishlist;