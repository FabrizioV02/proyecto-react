import React from "react";

 function item({ prod }) {
  return (
    <div className="container">
      <img className="w-20" src={prod.image} alt="" />
        <h4>{prod.nombre}</h4>
        <p>{prod.precio}</p>
        <p>{prod.descripcion}</p>
    </div>

  )
}

export default item