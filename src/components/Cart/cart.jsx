import React, { useContext, useState } from "react";
import { cartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import {doc, addDoc, collection, serverTimestamp} from 'firebase/firestore'

const Cart = () => {
  const { products, clear, deleteProduct, totalCost } = useContext(cartContext);

  const [ saleId, setSaleId] = useState("")

  const datosComprador = {
    nombre: 'Enrique',
    apellido: 'Lopez',
    email: 'juanlopez@gmail.com'
  }
  
  const finalizarCompra = () => {
    const ventasCollection = collection (db, 'ventas');
    addDoc(ventasCollection,{
      datosComprador,
      items: [{nombre: 'remera', id: 1},{nombre: 'saco', id: 2}],
      date: serverTimestamp(),
      total:500,

    })
    .then((resultado) => {
      setSaleId(resultado.id);
  })
  }

 
  if (products.length === 0) {
    return (
      <>
        <div>
          <h1 className="uppercase text-center text-black text-2xl mt-[15%] mb-[5rem]">Tu carrito está vacío</h1>
        </div>
        <div className="flex">
          <button className="uppercase mx-auto text-xl text-center bg-black text-white py-2 rounded-lg font-semibold mt-4 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out px-20">
            <Link
              to="/"
            >
              Ir al menu
            </Link>
          </button>
        </div>
      </>
    );
  }

  return (
    <>
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {
          products.map((detail) => (

            <div className="border-4 border-zinc-800 rounded-lg sm:mr-10 p-10 flex items-end justify-start relative max-w-[18rem] min-w-[18rem] mx-auto my-[1rem]" key={detail.id}>
              <div className=" py-3 text-center">
                <p className="text-2lg text-black-900">{detail.title}</p>
                <img className="max-w-[140px] max-h-[140px] mx-auto"   src={detail.image} alt="" />
                <p className="mt-4 text-green-700 text-md font-bold" >${detail.price}</p>
                <button onClick={() => { deleteProduct(detail.id) }} className="uppercase mx-auto text-xl text-center bg-black text-white py-2 rounded-lg font-semibold mt-4 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out px-20">X</button>
                <p className="mt-[50px]">Cantidad: {detail.quantity}</p>
              </div>
            </div>
          ))
        }
    </div>
    <div>
        <p className="text-center">${totalCost()}</p>
    </div>
    <div className="flex">
        <button onClick={finalizarCompra} className="uppercase mx-auto text-xl text-center bg-green-700 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-green-500 focus:scale-95 transition-all duration-200 ease-out px-20 my-5">Comprar</button>
    </div>
    <div className="flex">
        <button onClick={clear} className="uppercase mx-auto text-xl text-center bg-red-700 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-red-500 focus:scale-95 transition-all duration-200 ease-out px-20 my-5">Vaciar Carrito</button>
    </div> 
    </>
  )
}

export default Cart;
