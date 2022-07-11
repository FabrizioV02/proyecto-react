import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Itemlistcontainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';


function App() {
  return <>
    <Navbar />
    <div className='my-10'>
      <h2 className='h2-products text-3xl text-center font bold uppercase'>Productos</h2>
    </div>
    
    <Itemlistcontainer mensaje="Aca va a ir nuestro catalogo" />
    <ItemDetailContainer/>
  </>;
}

export default App;
