import PropTypes from "prop-types";
import { CardContext } from "../Context/CartContect";
import { useContext } from "react";

const ProductItem = ({ product }) => {

    const {cart, addToCart} = useContext(CardContext);

    const findProduct = cart.find((item) => item.id === product.id);

    const { name, image, price } = product;
    
    ProductItem.propTypes = {
     product: PropTypes.object, 
     cart: PropTypes.array.isRequired,
     setCart: PropTypes.func
    };


  return (
    <div className="border p-4 m-1 rounded-lg shadow-lg">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={image}
        alt="product-img"
      />
      <div className="p-3">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500 my-2">{price} TL</p>
        <button
          className={`bg-blue-500 text-white px-1 py-2 rounded hover:bg-blue-600 w-full ${findProduct && "opacity-50 cursor-no-drop"}`}
          onClick={() => addToCart(product)}
          disabled={findProduct}
        >
          Sepete ekle
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
