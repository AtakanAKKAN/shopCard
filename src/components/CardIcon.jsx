import {FiShoppingCart} from "react-icons/fi"
// import { useContext } from "react";
// import { MyContext } from "../Context/MyContext";
import { CardContext } from "../Context/CartContect"
import { useContext } from "react"
const CardIcon = () => {

  const {cart} = useContext(CardContext);
  
  return (
    <div className="relative">
      <FiShoppingCart className="text-2xl"/>
      {cart.length === 0 ? "" : <span className="bg-red-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-4">{cart.length}</span>}
      </div>
  )
}

export default CardIcon