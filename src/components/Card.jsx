import PropTypes from "prop-types";
import { CardContext } from "../Context/CartContect";
import { useContext } from "react";

const Card = () => {

  const {cart, clearShopCard} = useContext(CardContext);

  Card.propTypes = {
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func,
  }
  

  const total = cart.reduce((acc,item) => acc + item.price, 0)


  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
    <ul>
        {cart.map((item) => (
          <li className="mt-2 flex justify-between" key={item.id}>
          <span>{item.name} </span>
          <span>{item.price} TL</span>
        </li>
        ))}
    </ul>
    <hr className="my-4" />
    <p className="font-semibold text-xl ">Toplam: {total} TL</p>
    <button onClick={clearShopCard} className="bg-red-500 px-4 py-2 text-white rounded w-full hover:bg-red-600 transition-all mt-4">Sepeti Boşalt</button>
    </div>
  )
}

export default Card