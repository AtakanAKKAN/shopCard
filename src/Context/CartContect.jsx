import {createContext, useState} from "react";
import PropTypes from "prop-types";
import ProductData from "../ProductData";



export const CardContext = createContext();

export const CartProvider = ({children}) => {

    const data = ProductData;
    const [cart, setCart] = useState([])

    
    const addToCart = (product) => {
        // setCart([...cart, product]); 2 side aynı şeyi yapıyor, altaki daha güvenli
        setCart((prevState) => [ ...prevState, product])
    }

    const clearShopCard = () => {
        setCart([])
    }
    
    const value ={
        cart,
        setCart,
        clearShopCard,
        data,
        addToCart,
    }

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}

CartProvider.propTypes = {
    children: PropTypes.node,
   };

