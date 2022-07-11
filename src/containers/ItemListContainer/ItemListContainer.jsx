import React, { useEffect, useState } from "react";
import instrumentos from "../../data/datos";
import ItemList from "./ItemList";

const promise = new Promise((res) => {
    setTimeout(() => {
      res(instrumentos);
    }, 2000);
  });

const Itemlistcontainer = () => {
    const [instrumentsList, setInstrumentsList] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      promise.then((response) => {
        setLoading(false);
        setInstrumentsList(response);
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
        <ItemList instruments={instrumentsList} />
      </div>
      
    );
}

export default Itemlistcontainer