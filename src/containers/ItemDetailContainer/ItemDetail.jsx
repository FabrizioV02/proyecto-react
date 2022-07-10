import React from "react";

const ItemDetail = ({ prod }) => {
    return (
        <>
            <p>{prod.imagen}</p>
            <p>{prod.descripcion}</p>
        </>
    );
  };


export default ItemDetail
