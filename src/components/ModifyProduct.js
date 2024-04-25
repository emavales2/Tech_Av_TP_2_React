import { useState } from 'react';
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';


const ModifyProduct = ({ onModify, currentProdInfo }) => {

    const [name, setName] = useState(currentProdInfo.name);
    const [description, setDescription] = useState(currentProdInfo.description);
    const [price, setPrice] = useState(currentProdInfo.price);
    const [category, setCategory] = useState(currentProdInfo.category);

    
    const onSubmit = async (e) => {
        e.preventDefault();

        // ----- CHECK -----
        console.log('Submitting modification:', { id: currentProdInfo.id, name, description, price, category });

        if (typeof onModify === 'function') {
            
            try {
                // Transmet les données modifiées au component parent (SingleProduct) 
                onModify({ id: currentProdInfo.id, name, description, price, category });
                
                if(!name) {
                    toast.warning('Écrivez le nom du produit SVP', {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored',
                        transition: Bounce,
                    });
                    return;
                }

                toast.success('MODIFIED!', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                    transition: Bounce,
                });

            } catch (error) {
                toast.error('Erreur lors de la MOD du thé!', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                    transition: Bounce,
                });
            }            
        }
    }


    return (
        <form className="form_container flex-col" onSubmit={onSubmit}>
            <header className="text-center font-bold text-3xl">Modifier Produit</header>
            <div className="form_data">
            
                <article>
                    <label><h4>Produit</h4></label>
                    <input
                    type="text"
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                    />
                </article>
                <article>
                    <label><h4>Description</h4></label>
                    <input
                    type="text"
                    value={description}
                    onChange = {(e) => setDescription(e.target.value)}
                    />
                </article>
                <article>
                    <label><h4>Prix</h4></label>
                    <input 
                    type="float"
                    value={price}
                    onChange = {(e) => setPrice(e.target.value)} />
                </article>
                <article className="deroulant">
                    <label><h4>Catégorie</h4></label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">{currentProdInfo.category}</option>
                        <option value="Thé Noir">Thé Noir</option>
                        <option value="Thé Vert">Thé Vert</option>
                        <option value="Thé Blanc">Thé Blanc</option>
                        <option value="Thé Roiboos">Thé Roiboos</option>
                        <option value="Tisane">Tisane</option>
                        <option value="Matcha">Matcha</option>
                    </select>
                </article>

                <button className="cust_button mt-10">Enregistrer Modification</button>
            </div>
        </form>
    )
}

export default ModifyProduct;