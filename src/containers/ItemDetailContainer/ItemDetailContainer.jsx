import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
 const [detail, setDetail] = useState([]);
 const [setError] = useState(false);
 const [loading, setLoading] = useState (true);
 
 const { Id } = useParams();

 useEffect(() =>{
   const getDetail = async () =>{
   try {const response = await fetch(`https://fakestoreapi.com/products/${Id}`);
     const data = await response.json();
     setDetail(data);}
     catch(err) {
       console.log(err);
       setError(true);
     }
     finally{
       setLoading(false);
     }
   };
   getDetail();
 },[Id]);

    return(
        <>{loading ? <p className="text-center uppercase text-5xl mt-40">Loading...</p> : <ItemDetail detail={detail}/>}
         
        </>
        
    )
}


export default ItemDetailContainer