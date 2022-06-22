import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Cartwidget from './components/NavBar/CartWidget';
import Itemlistcontainer from './components/Main/ItemListContainer'


function App() {
  return <>
    <h2>Tienda React</h2>

    <Cartwidget/>
    <Navbar />
    <Itemlistcontainer/>
  </>;
}

export default App;
