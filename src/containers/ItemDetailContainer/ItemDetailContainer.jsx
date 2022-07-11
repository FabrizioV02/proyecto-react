import React, { useEffect, useState } from "react";
import instrumentos from "../../data/datos";
import ItemDetail from "./ItemDetail";

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(instrumentos);
    }, 2000);
  });

const Itemlistcontainer = () => {
    const [instrumentList, setInstrumentList] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      promesa.then((response) => {
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
        <ItemDetail instrument={instrumentList} />
      </div>
      
    );
}

export default Itemlistcontainer