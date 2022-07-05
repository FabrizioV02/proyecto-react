import React, { useEffect, useState } from "react";
import instrumentos from "../../data/datos";
import ItemList from "./ItemList";


const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(instrumentos);
    }, 2000);
  });
  






























const Itemlistcontainer = (prop) => {
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
        <ItemList instruments={instrumentList} />
      </div>
      
    );
}

export default Itemlistcontainer