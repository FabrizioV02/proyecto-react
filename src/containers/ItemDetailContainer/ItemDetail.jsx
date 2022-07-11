import React from "react";

const ItemDetail = ({detail}) => {
    return(
    <div 
        key={detail.id}>
        <h2>{detail.title}</h2>
    <div>
        <p>${detail.price}</p>
        <p>{detail.description}</p>
    </div>

    </div>
    )
}


export default ItemDetail