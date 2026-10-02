import {useParams} from "react-router-dom"; 
import products from "../data/products";
function ProductDetails() {
  const {id} = useParams();

  const product = products.find((product) => product.id === Number(id));

   if (!product) {
    return <h2 className="h-screen flex items-center justify-center">Product not found</h2>;
  }

  return (
    <div className="flex flex-col justify-center lg:justify-items-center justify-center h-screen bg-white lg:mt-20 w-full">
    
        <div className="lg:mt-4">
            <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-lg" />
        </div>
        <div className="lg:mt-4 ">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p >${product.price.toFixed(2)}</p>
            <div>
                
                <div>{product.color}</div>
                <div>{product.quantity} in stock</div>
            </div>

            <div>{product.description}</div>

            <div>{product.details}</div>

            <div>
                <button>Add to Cart</button>
                <button>Buy Now</button>
            </div>
        </div>


    </div>
  );
}

export default ProductDetails;