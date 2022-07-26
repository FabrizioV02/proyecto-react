import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection} from "firebase/firestore";


const ItemDetailContainer = () => {
 const [detail, setDetail] = useState([]);
 const [loading, setLoading] = useState (true);
 
 const { Id } = useParams();

 useEffect(() =>{

  const detailCollection = collection(db, 'productos');
  const refDoc = doc(detailCollection, Id);

    getDoc(refDoc).then(result => {
      setDetail({
        id: result.id,
        ...result.data(),
    })
})
  .catch(error => console.log(error))
  .finally(() => setLoading(false))

},[Id]);


    return(
        <>{loading ? <p className="text-center uppercase text-5xl mt-40">Loading...</p> : <ItemDetail detail={detail}/>}
         
        </>
        
    )
}


export default ItemDetailContainer