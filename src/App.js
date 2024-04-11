// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// ----------------- * * IMPORTANT!! CETTE VERSION DE App.js UTILISE LES DONNÉES JSON FETCHÉES DE db.json * * -----------------
// ----------------- * * IMPORTANT!! LE DOSSIER A UN AUTRE FICHIER App.js QUI A DES DONNÉES EN DUR * * -----------------

function App() {

    // --------------------- * * DONNÉES JSON * * ---------------------

    const [produits, setProduits] = useState ([])


    // --------------------- * * REST * * ---------------------

    // --------------------- * * Fetch pour obtenir donées json * * ---------------------

    useEffect(()=> {
        const getProduits = async () => {
        const produitsFromServer = await fetchProduits('http://localhost:5000/produits')
        setProduits(produitsFromServer)
        }       
        getProduits()
    }, [])
  
    const fetchProduits = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }


    // --------------------- * * Ajouter Donée * * ---------------------

    const addProduit = async (prodAjoute) => {
        
        const res = await fetch('http://localhost:5000/produits',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(prodAjoute)
        })

        const newProduit = await res.json() 

        setProduits([...produits, newProduit])
    }


    // --------------------- * * Modifier Donée Cible * * ---------------------

    const modifierProduit = async (prodModifie) => {
        const res = await fetch(`http://localhost:5000/produits/${prodModifie.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(prodModifie),
        });

        const data = await res.json();
    
        setProduits((prevProduits) =>
            prevProduits.map((prodCible) =>
                prodCible.id === prodModifie.id ? { ...prodCible, ...prodModifie } : prodCible
            )
        )
    }


    // --------------------- * * Éffacer Donée Cible * * ---------------------

    const deleteProduit = async (idCible) => {
        await fetch(`http://localhost:5000/produits/${idCible}`, {
        method: 'DELETE',
        })
        setProduits(produits.filter((produit) => produit.id !==idCible))
    }

  

    //  --------------------- * * RENDER * * ---------------------

    return (

        // --- ** NOTE: What we use as basename is what will come after "localhost:3000" (or whatever port) even when running locally for development ** ---

        // <BrowserRouter basename={"/tp2react"}>  
        <BrowserRouter>      
            <main>
                <Nav/>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductPage addProduit={addProduit} produits={produits} deleteProduit={deleteProduit} modifierProduit={modifierProduit} />} />
                </Routes>
            
            </main>     
        </BrowserRouter>
    );
}

export default App
