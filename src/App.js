import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ----------------- * * IMPORTANT!! CETTE VERSION DE App.js UTILISE LES DONNÉES JSON FETCHÉES DE db.json * * -----------------
// ----------------- * * LE DOSSIER ROOT A UN AUTRE FICHIER App.js (App_HARDCODED.js) QUI A DES DONNÉES EN DUR * * -----------------

function App() {

    // --------------------- * * * DONNÉES JSON * * * ---------------------

    const [products, setProducts] = useState ([]);


    // --------------------- * * * REST * * * ---------------------

    // --------------------- * * FETCH pour obtenir donées json * * ---------------------

    useEffect(()=> {
        const getProducts = async () => {
        const productsFromServer = await fetchProducts('http://localhost:5000/products');
        setProducts(productsFromServer);
        }       
        getProducts();
    }, []);
  
    const fetchProducts = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }


    // --------------------- * * AJOUTER NOUVELLE DONNÉE dans db.json * * ---------------------
    // --------------------- * * (Fonction appelée sur ProductPage.js) * * ---------------------

    const addProduct = async (product) => {
        
        const res = await fetch('http://localhost:5000/products',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product),
        });

        const newProduct = await res.json();
        setProducts([...products, newProduct]);
    }


    // --------------------- * * MODIFIER DONNÉE CIBLE dans db.json * * ---------------------
    // --------------------- * * (Fonction appelée sur SingleProduct.js) * * ---------------------

    const modifyProduct = async (updatedProd) => {
        const res = await fetch(`http://localhost:5000/products/${updatedProd.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedProd),
        });

        // const data = await res.json();
    
        setProducts((prevProducts) =>
            prevProducts.map((targetProd) =>
            targetProd.id === updatedProd.id ? { ...targetProd, ...updatedProd } : targetProd
            )
        );
    }


    // --------------------- * * ÉFFACER DONNÉE CIBLE dans db.json * * ---------------------
    // --------------------- * * (Fonction appelée sur SingleProduct.js) * * ---------------------

    const deleteProduct = async (targetId) => {
        await fetch(`http://localhost:5000/products/${targetId}`, {
            method: 'DELETE',
        });
        setProducts(products.filter((product) => product.id !==targetId));
    }
    

    //  --------------------- * * * RENDER * * * ---------------------

    return (
        // --- ** NOTE: What we use as basename is what will come after "localhost:3000" (or whatever port) even when running locally for development ** ---

        // <BrowserRouter basename={"/tp2react"}>  
        <BrowserRouter>  

            <main className="flex flex-col flex-1 max-w-screen-xl mx-auto my-0 w-full  shadow-2xl drop-shadow-xl justify-between">   
                <Nav/>

                <div className="px-12">              
                    <Routes >
                        <Route path="/" element={<Home />} />
                        <Route path="/macollection" element={<ProductPage addProduct={addProduct} products={products} deleteProduct={deleteProduct} modifyProduct={modifyProduct} />} />
                    </Routes> 
                </div> 

                <footer className="max-w-screen-xl text-center py-5 px-12 mx-auto w-full shrink-0 coral">Erika Ampudia-Vales | Techniques Avancées en Programmation 2024</footer>  
            </main> 

            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
