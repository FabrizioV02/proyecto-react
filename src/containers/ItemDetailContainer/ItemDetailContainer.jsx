import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [instrumentList, setInstrumentList] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      promise.then((response) => {
        setLoading(false);
        setInstrumentList(response);
      });
    }, []);
  
    if (loading) {
      return (
        <>
          <h1>Cargando...</h1>
        </>
      );
    }
    return (
        
      <div>
        <ItemDetail instruments={instrumentList} />
      </div>
      
    );
}

export default ItemDetailContainer







  
