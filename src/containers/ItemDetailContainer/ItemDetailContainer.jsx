import React, { useEffect, useState } from "react";
import instrumentos from "../../data/datos";
import ItemDetail from "./ItemDetail";

const promesa = new Promise((res) => {
    setTimeout(() => {
      res(instrumentos);
    }, 2000);
  });

const ItemDetailContainer = () => {
    const [instrument, setInstrument] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      promesa.then((response) => {
        setLoading(false);
        setInstrument(response);
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
        
      <>
        <ItemDetail instrument={instrument} />
      </>
      
    );
}

export default ItemDetailContainer