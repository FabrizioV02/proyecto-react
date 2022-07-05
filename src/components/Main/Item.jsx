import React from "react";

 function item({ prod }) {
  return (
    <>
      <h4>{prod.nombre}</h4>
      <p>{prod.precio}</p>
    </>
  )
}

export default item