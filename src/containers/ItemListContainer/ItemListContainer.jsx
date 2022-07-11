import React, { useState, useEffect } from "react";
import Itemlist from "./ItemList";

const ItemListContainer =  (prop) => {
    const { name } = prop;
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState (false);
    const [loading, setLoading] = useState (true);
    
    useEffect(() =>{
      const getProducts = async () =>{
      try {const response = await fetch('https://fakestoreapi.com/products');
           const data = await response.json();
           setProductos(data);
          }
        catch(err) {
          console.log(err);
          setError(true);
        }
        finally{
          setLoading(false);
        }
        
      }
      getProducts();
    },[]);

   
    return (
        <>
        <h2 className="h2-products text-center text-3xl" >
          {name} 
        </h2>
        {loading ? <p>cargando productos...</p> : error ? <p>Error....</p> : <p></p>}
        <Itemlist productos={productos}/>
        </>
    )
}

export default ItemListContainer
