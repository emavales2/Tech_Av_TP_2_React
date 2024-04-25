import { FaTrashAlt } from 'react-icons/fa';
import React, { useState } from 'react';
import ModifyProduct from './ModifyProduct';
import { BasicModal } from './Modal';


const SingleProduct = ({ product, onDelete, modifyProduct }) => {

    const [currentProduct, setCurrentProduct] = useState(product);

    const updateProduct = (modProdInfo) => {
        setCurrentProduct({ ...currentProduct, ...modProdInfo });
    };
        
    return (
        <div className="ant_white bg-black p-8 flex flex-col justify-between w-full gap-4 drop-shadow-md shadow-lg">
            {/* <picture>
                <img src=""></img>
            </picture> */}
            <header className="flex gap-5 justify-between"> 
                <h3 className="font-bold text-lg coral">{currentProduct.name}</h3>

                <picture className="mt-1 hover:cursor-pointer w-8">
                    <FaTrashAlt className="hov-white w-full" onClick = {() => onDelete(currentProduct.id)}/> 
                </picture>
            </header>

            <p>{currentProduct.description}</p>
            <h4>{currentProduct.price}</h4>
            <small>{currentProduct.category}</small> 

            <BasicModal buttonText="MODIFY">
                <ModifyProduct onModify={(modProdInfo) => {
                    // ----- CHECK -----
                    console.log('Mis à jour: SUCCESS!!', modProdInfo);
                    modifyProduct(modProdInfo);
                    updateProduct(modProdInfo);
                }}
                    currentProdInfo={currentProduct}
                />
            </BasicModal>        
        </div> 
    )
}

export default SingleProduct;