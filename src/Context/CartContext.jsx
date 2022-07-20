import React, { useState, createContext, useEffect } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ( {children} ) => {

    
    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);

    const getQtyProducts = () => {
        let quantity = 0;
        products.forEach(detail =>{
            quantity += detail.quantity
        })
        setQtyProducts(quantity);
    }
    useEffect(() => {
        getQtyProducts();
    },[products])

    const addProduct = (detail) => {
        if(isInCart(detail.id)){
            const found = products.find(p => p.id === detail.id);
            const index = products.indexOf(found);
            const auxProducts = [...products];
            auxProducts[index].quantity += detail.quantity;
            setProducts(auxProducts);
        }else{
            setProducts([...products, detail])
        };
    }

    const deleteProduct = (id) => {
        setProducts(products.filter(detail => detail.id !== id));
    }

    const clear = () => {
        setProducts([]);
        setQtyProducts(0);
    }

    const isInCart = (id) => {
        return products.some(products => products.id === id);
    }

    const totalCost = () => {
        let total = 0
        products.forEach(products => {
          total += products.quantity * products.price
        })
    
        return (Math.round
            (total)
        )
    }

    return(
        <Provider value={{products, addProduct, deleteProduct, clear, qtyProducts, totalCost }}>
            {children}
        </Provider>
    );

}

export default CartCustomProvider; 