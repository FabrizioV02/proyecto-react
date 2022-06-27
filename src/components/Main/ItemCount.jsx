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
        <div className='contador-controles'>
            <button onClick={restar}>-</button>
            <p>{cuenta}</p>
            <button onClick={sumar}>+</button>
        </div>
        <p></p>
        <div>
            <button onClick={onAdd}>Añadir al carrito</button>
        </div>
        
    </>
  )
}

export default ItemCount