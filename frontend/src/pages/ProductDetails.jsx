import {useParams} from "react-router-dom"; 
function ProductDetails() {
  const {id} = useParams();

  return (
    <div className="flex flex-col justify-center lg:justify-items-center justify-center h-screen bg-white lg:mt-20 w-full">
    
        <div className="lg:mt-4">
            <img src="" alt="Product" className="w-64 h-64 object-cover rounded-lg" />
        </div>
        <div className="lg:mt-4 ">
            <h2 className="text-2xl font-bold">Product Name</h2>
            <p >product price</p>
            <div>
                
                <div>color</div>
                <div>quantity</div>
            </div>

            <div>description</div>

            <div>Product details</div>

            <div>
                <button>Add to Cart</button>
                <button>Buy Now</button>
            </div>
        </div>


    </div>
  );
}

export default ProductDetails;