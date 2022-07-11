import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <>
    <NavBar />,
    <ItemListContainer name = 'PRODUCTOS' />
    <ItemDetailContainer />
    </>
  );
}

export default App;
