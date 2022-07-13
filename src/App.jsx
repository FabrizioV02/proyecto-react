import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= "/" element={<ItemListContainer name='PRODUCTOS'/>} />
        <Route path= "/category/:categoryId" element={<ItemListContainer name='PRODUCTOS'/>} />
        <Route path= "/item/:itemId" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
