import React, { useContext } from "react";
import Cart from '../../assets/img/Cart-modified.png'
import { cartContext } from "../../Context/CartContext";

const Cartwidget = () => {
  const { qtyProducts } = useContext(cartContext);

    return (
      <a href="#" className="flex">
        <p className="text-center my-auto">{qtyProducts}</p>
        <img className='h-8 w-9' src={Cart}/>
      </a>
    );
  };
  
  export default Cartwidget;
  