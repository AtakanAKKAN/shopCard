import ProductItem from "./ProductItem"
import { useContext } from "react";
import { CardContext } from "../Context/CartContect";

const Products = () => {

  const {data} = useContext(CardContext);


  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2 max-[500px]:grid-cols-1 gap-10 max-md:gap-1 mb-8">
        {data.map((product) => (
            <ProductItem key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Products