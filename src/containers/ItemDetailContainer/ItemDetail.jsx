import React, {useState, useContext} from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

const ItemDetail = ({detail}) => {
    const {addProduct} = useContext(cartContext);
    
    const [compraTerminada, setCompraTerminada] = useState(false)

    const onAdd = (cuenta) => {
        setCompraTerminada(true)
        addProduct({...detail, quantity:cuenta})
      }


    return(
    <div key={detail.id}>
        <h2 className="text-2xl md:text-3xl font-medium mt-3 text-center mt-[3rem]">{detail.title}</h2>
     <div>
        <img className="mt-20 mb-[3rem] mx-auto max-w-xs" src={detail.image} alt="" />
        <p className=" text-center mb-[3rem] text-xl">{detail.description}</p>
     </div>
     <div>
         <p className="text-center text-black text-5xl mt-3">${detail.price}</p>
     </div>
     <div className=" mb-10 py-5 flex-col items-center justify-center">
        {compraTerminada ? 
        <div className="">
         <button className="flex mx-auto">
            <Link className="uppercase mx-auto text-xl text-center bg-black text-white py-2 rounded-lg font-semibold mt-4 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out px-20" to="/cart">Finalizar Compra</Link>
         </button>
         <br />
         <button className="flex mx-auto">
            <Link className="uppercase mx-auto text-xl text-center bg-black text-white py-2 rounded-lg font-semibold mt-4 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out px-20" to="/">Continuar Comprando</Link>
         </button>
        </div>
         
        :<ItemCount  stock = {5} initial = {0} onAdd={onAdd}/>}
     </div>
    </div>
    
    )
}


export default ItemDetail