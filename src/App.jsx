import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/cart';

const App = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= "/" element={<ItemListContainer name='PRODUCTOS'/>} />
          <Route path= "/category/:categoryId" element={<ItemListContainer name='PRODUCTOS'/>} />
          <Route path= "/item/:Id" element={<ItemDetailContainer/>} />
          <Route path= "/cart" element={<Cart/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
