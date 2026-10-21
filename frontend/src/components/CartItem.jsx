
function CartItem({ item }) {
    return (
        <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
            <div>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-pink-500">${item.price.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default CartItem;