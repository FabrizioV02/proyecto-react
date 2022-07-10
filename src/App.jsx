import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Itemlistcontainer from './containers/ItemListContainer/ItemListContainer'


function App() {
  return <>
    <h2>Tienda React</h2>

    
    <Navbar />
    <Itemlistcontainer mensaje="Aca va a ir nuestro catalogo" />
  </>;
}

export default App;
