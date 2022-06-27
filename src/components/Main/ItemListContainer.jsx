import ItemCount from "./ItemCount"


const Itemlistcontainer = (prop) => {

    const onAdd= () => {

        alert(`Se añadio al carrito`)

    }









    return(
        <>
            <h3>{prop.mensaje}</h3>
            <ItemCount initial ={1} stock={5} onAdd={onAdd} />
        </>
        
    )
}

export default Itemlistcontainer