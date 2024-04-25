import SingleProduct from './SingleProduct';


const ManyProducts = ({ products, onDelete, modifyProduct }) => {

    return (
        <>  
            { products.length > 0 ? (
                
                products.map((product) => (
                    <SingleProduct key={product.id} product={product} onDelete={onDelete} modifyProduct={modifyProduct} />
                ))
                ):(

                <div className="bold text-center">Empty List</div>
            )}
        </>
    );
}

export default ManyProducts;