import React, {useState} from 'react'


const ItemCount = ({stock, initial, onAdd}) => {

    const [cuenta, setCuenta] = useState(initial)

    const sumar = () => {

        if (cuenta < stock) {
            setCuenta(cuenta+initial)
        }    
    }

    const restar = () => {

        if (cuenta >=2 ) {
            setCuenta(cuenta-initial)
        }
    }

  return (
    <>
        <div className='contador-controles flex text mt-20'>
            <button className='mx-auto uppercase row mx-auto text-xl text-center bg-black text-white py-2 rounded-lg font-semibold mt-4 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out px-5' onClick={restar}>-</button>
            <p>{cuenta}</p>
            <button className='mx-auto uppercase row mx-auto text-xl text-center bg-black text-white py-2 rounded-lg font-semibold mt-4 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out px-5' onClick={sumar}>+</button>
        </div>
        <div className='mt-20 mb-10 flex'>
            <button className='uppercase row mx-auto text-xl text-center bg-black text-white py-2 rounded-lg font-semibold mt-4 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out px-20' onClick={onAdd}>Comprar</button>
        </div>
        
    </>
  )
}

export default ItemCount