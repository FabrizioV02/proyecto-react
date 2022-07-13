import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div>
      <div className="card">
        <div className="header-wrapper">
          <div className="image-wrapper">
            <img src={producto.image} alt="" />
          </div>
        </div>
        <div className="text-wrapper">
          <div className="title-wrapper">
            <h2>{producto.title}</h2>
          </div>
          <div className="price-wrapper">
            <p>${producto.price}</p>
          </div>
          <div className="id-wrapper">
            <div key={producto.id}>
              <Link to={`/item/${producto.id}`}>ver mas</Link>
            </div>
          </div>
          <div className="description-wrapper">
            <p>{producto.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
