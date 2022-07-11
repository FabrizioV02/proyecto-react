import React from "react";

const Item = ({producto}) => {

    return (

     <div key={producto.id}>
     <h2>{producto.title}</h2>
 
     <div>
        <p>${producto.price}</p>
        <p>{producto.description}</p>
     </div>
 
   </div>

)
}

export default Item