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
        <Route path='path="/"' element={<ItemListContainer name='PRODUCTOS'/>} />
        <Route path='path="/category/:categoryId"' element={<ItemListContainer name='PRODUCTOS'/>} />
        <Route path='path="/product/:productId"' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
