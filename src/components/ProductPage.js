import React, { useState } from 'react';
import ManyProducts from './ManyProducts';
import AddProduct from './AddProduct';
import Button from './Button';


const ProductPage = ({ products, deleteProduct, addProduct, modifyProduct }) => {

    const [showAddProduct, setShowAddProduct] = useState(false);

    const toggleShowAddProduct = () => {
        setShowAddProduct(!showAddProduct);
    };


    return (
        <div className="flex flex-col items-center py-20 gap-20">
            <header>
                <h1 className="text-5xl font-bold coral tracking-wide">Ma Collection</h1>
            </header>
        
            <section className="w-full flex flex-col gap-8 text-center">
                <Button className="cust_button" text={showAddProduct ? 'FERMER FORMULAIRE' : 'AJOUTER UN THÉ'} onClick={toggleShowAddProduct} />            
                {showAddProduct && <AddProduct onAdd={addProduct} onSuccess={toggleShowAddProduct} />}    
            </section> 
            
            <div className='prod_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-12 w-full justify-between'>           
                <ManyProducts products={products} onDelete={deleteProduct} modifyProduct={modifyProduct}/>
            </div>
        </div>        
    );
}

export default ProductPage;