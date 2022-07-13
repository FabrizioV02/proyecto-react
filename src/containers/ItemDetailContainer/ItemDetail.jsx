import React from "react";
import ItemCount from "../../components/ItemCount/ItemCount";

const ItemDetail = ({detail}) => {
    return(
    <div key={detail.id}>
        <h2>{detail.title}</h2>
     <div>
        <img src={detail.image} alt="" />
        <p>${detail.price}</p>
        <p>{detail.description}</p>
     </div>
     <div>
        <ItemCount  stock = {5} initial = {1}/>
     </div>
    </div>
    )
}


export default ItemDetail