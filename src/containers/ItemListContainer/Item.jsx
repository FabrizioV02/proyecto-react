import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div key={producto.id}>
      <Link to={`/item/${producto.id}`}></Link>

      <h2>{producto.title}</h2>

      <div>
        <p>${producto.price}</p>
        <p>{producto.description}</p>
      </div>
    </div>
  );
};

export default Item;
