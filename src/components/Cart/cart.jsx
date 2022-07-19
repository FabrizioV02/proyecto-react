import React, { useContext } from "react";
import { cartContext } from '../../Context/CartContext';

const Cart = () => {
    const { products } = useContext(cartContext);

    return(
        <>{products.length === 0 ? <h1> Tu carrito está vacío </h1>
        : <>{products.map(detail => <h1 key={detail.id}>{detail.title}</h1>)}</>}</>
    )
    
}

export default Cart; 