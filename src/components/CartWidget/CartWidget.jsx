import React, { useContext } from "react";
import Cart from '../../assets/img/Cart-modified.png'
import { cartContext } from "../../Context/CartContext";

const Cartwidget = () => {
  const { qtyProducts } = useContext(cartContext);

    return (
      <a href="#">
        <p className="text-center">{qtyProducts}</p>
        <img className='h-8 w-9' src={Cart}/>
      </a>
    );
  };
  
  export default Cartwidget;
  