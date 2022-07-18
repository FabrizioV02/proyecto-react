import React, { useState, useEffect } from "react";
import Itemlist from "./ItemList";
import { useParams } from 'react-router-dom';


const ItemListContainer =  (prop) => {

  const { categoryId } = useParams();

    const { name } = prop;
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState (false);
    const [loading, setLoading] = useState (true);

    
    
    useEffect(() =>{

      const URL = categoryId
      ?  `https://fakestoreapi.com/products/category/${categoryId}`
      : 'https://fakestoreapi.com/products'
      
      const getProducts = async () =>{
      try {const response = await fetch(URL);
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
    },[categoryId]);

   
    return (
        <>
        <h2 className="h2-products text-center text-3xl mt-20  mb-40" >
          {name} 
        </h2>
        {loading ? <p className="text-center uppercase text-5xl">Loading...</p> : error ? <p>Error....</p> : <p></p>}
        <Itemlist productos={productos}/>
        </>
    )
}

export default ItemListContainer
