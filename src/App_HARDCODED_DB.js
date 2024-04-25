// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import { useState } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

// ----------------- * * IMPORTANT!! CETTE VERSION DE App.js UTILISE LES DONNÉES JSON EN DUR * * -----------------
// ----------------- * * IMPORTANT!! LE DOSSIER A UN AUTRE FICHIER App.js QUI FAIT UN FETC DE DONNÉES * * -----------------

function App() {

    // --------------------- * * DONNÉS JSON * * ---------------------

    const [products, setProducts] = useState ([
        {
            "id": 1,
            "name": "Produit No. UN",
            "description": "Description courte du Produit No. 1",
            "price": "100.00 CAD",
            "category": "Catégorie A"
        },
        {
            "id": 2,
            "name": "Produit No. DEUX",
            "description": "Description courte du Produit No. 2",
            "price": "102.50 CAD",
            "category": "Catégorie B"
        },
        {
            "id": 3,
            "name": "Produit No. TROIS TEST",
            "description": "Description courte du Produit No. 3",
            "price": "30.00 CAD",
            "category": "Catégorie C"
        }
    ])


  // --------------------- * * MÉTHODES CRUD * * ---------------------

  // --------------------- * * Éffacer * * ---------------------

  const deleteProduct = async (targetId) => {

    setProducts(products.filter((product) => product.id !==targetId))
  }


  // --------------------- * * Ajouter * * ---------------------

  const addProduct = (product) => {
    
    const lastId = products.length > 0 ? products[products.length - 1].id : 0
    const id = lastId + 1
    const newProduct = {id, ...product}
    setProducts([...products, newProduct])
  }


  // --------------------- * * Modifier * * ---------------------

  const modifyProduct = (prodModifie) => {

    setProducts(products.map(prodCible => 
      prodCible.id === prodModifie.id ? { ...prodCible, ...prodModifie } : prodCible
    ));
};


  //  ------- * RENDER * -------

  return (

    // --- ** NOTE: What we use as basename is what will come after "localhost:5000" (or whatever port) even when running locally for development ** ---

    // <BrowserRouter basename={"/tp2react"}>  
    <BrowserRouter>      
        <main>
          <Nav/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage addProduct={addProduct} products={products} deleteProduct={deleteProduct} modifierProduct={modifierProduct} />} />
          </Routes>
          
        </main>     
    </BrowserRouter>
  );
}

export default App;
