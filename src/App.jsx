import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Itemlistcontainer from './components/Main/ItemListContainer'


function App() {
  return <>
    <h2>Tienda React</h2>

    
    <Navbar />
    <Itemlistcontainer/>
  </>;
}

export default App;
