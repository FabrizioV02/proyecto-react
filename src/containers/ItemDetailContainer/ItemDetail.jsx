import React, {useState} from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({detail}) => {
    
    const [compraTerminada, setCompraTerminada] = useState(false)

    const onAdd = (cuenta) => {
        setCompraTerminada(true)
      }


    return(
    <div key={detail.id}>
        <h2 className="text-2xl md:text-3xl font-medium mt-3 text-center mt-40">{detail.title}</h2>
     <div>
        <img className="my-20 mx-auto max-w-xs" src={detail.image} alt="" />
        <p className="my-20 text-center text-xl">{detail.description}</p>
     </div>
     <div>
         <p className="text-center text-black text-5xl mt-3">${detail.price}</p>
     </div>
     <div className="mt-20 mb-10 py-5 flex-col items-center justify-center">
        {compraTerminada ? 
         <button className="flex mx-auto">
            <Link className="uppercase mx-auto text-xl text-center bg-black text-white py-2 rounded-lg font-semibold mt-4 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out px-20" to="/cart">Finalizar Compra</Link>
         </button>:
         <ItemCount  stock = {5} initial = {1} onAdd={onAdd}/>}
     </div>
    </div>
    
    )
}


export default ItemDetail