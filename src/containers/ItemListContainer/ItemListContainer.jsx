import React, { useState, useEffect } from "react";
import Itemlist from "./ItemList";
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer =  (prop) => {

    const { name } = prop;
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState (false);
    const [loading, setLoading] = useState (true);

    const { categoryId } = useParams();

    useEffect(() =>{
    const q = categoryId
    ? query(collection(db,'productos'), where('category', '==', categoryId))
    : collection(db,'productos');

      getDocs(q)
      .then(result =>{
         const lista = result.docs.map(doc => {
           return{
             id: doc.id,
             ...doc.data(),
           }
         })
         setProductos(lista)
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
    }, [categoryId]);
   
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
