import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="wrapper flex items-center justify-center min-h-screen container-mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={producto.image} alt="" />
            </div>
            <h2 className="text-2xl md:text-3xl font-medium mt-3 text-center">{producto.title}</h2>
            <p className=" text-center text-black text-lg mt-3">${producto.price}</p>
            <div className="text-center bg-black text-white py-2 rounded-lg font-semibold mt-4 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out" key={producto.id}>
              <Link  to={`/item/${producto.id}`}
              >VER MAS</Link>
            </div>
          </div>
        </div> 
        </div>
      </div>
  );
};

export default Item;
