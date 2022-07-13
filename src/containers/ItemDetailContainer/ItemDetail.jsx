import React from "react";
import ItemCount from "../../components/ItemCount/ItemCount";

const ItemDetail = ({detail}) => {
    return(
    <div key={detail.id}>
        <h2 className="text-2xl md:text-3xl font-medium mt-3 text-center mt-40">{detail.title}</h2>
     <div>
        <img className="my-20 mx-auto max-w-xs" src={detail.image} alt="" />
        <p className="my-20 text-center text-xl">{detail.description}</p>
     </div>
     <div>
         <p className="text-center text-black text-5xl mt-3">${detail.price}</p>
         <ItemCount  stock = {5} initial = {1}/>
     </div>
    </div>
    )
}


export default ItemDetail