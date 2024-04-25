import { useState } from 'react';
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';


const AddProduct = ({ onAdd, onSuccess }) => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

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

        try {
            onAdd({name, description, price, category});
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');

            // Déclanche toggleShowAddProduct dans ProductPage.js, qui fermera le formulaire si les données sont envoyées avec succés
            onSuccess();

            toast.success('Nouveau thé ajouté!', {
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
            toast.error('Erreur lors de l\'ajout du thé!', {
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

    return (
        <form className="form_container" onSubmit={onSubmit}>
            <section className="form_data">
                <article>
                    <label><h4>Nom du thé</h4></label>
                    <input
                        type="text"
                        placeholder="Nom du thé ou melange"
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                    />
                </article>
                <article>
                    <label><h4>Description</h4></label>
                    <input
                        type="text"
                        placeholder="Petite description du gout ou melange"
                        value={description}
                        onChange = {(e) => setDescription(e.target.value)}
                    />
                </article>
                <article>
                    <label><h4>Prix</h4></label>
                    <input type="float" placeholder="Prix du thé en CAD" value={price}
                    onChange = {(e) => setPrice(e.target.value)} />
                </article>
                <article className="deroulant">
                    <label><h4>Catégorie</h4></label>
                    <select value={category} onChange = {(e) => setCategory(e.target.value)}>
                        <option value="">Selectionnez une catégorie</option>
                        <option value="Thé Noir">Thé Noir</option>
                        <option value="Thé Vert">Thé Vert</option>
                        <option value="Thé Blanc">Thé Blanc</option>
                        <option value="Thé Roiboos">Thé Roiboos</option>
                        <option value="Tisane">Tisane</option>
                        <option value="Matcha">Matcha</option>
                    </select>
                </article>
            </section>
            <section className="flex flex-col items-center justify-center gap-8">
                <picture>
                    <img src="/assets/logo/teabox_icon_LG.png" alt="teacup"/>
                </picture>
                <button className="cust_button">ENREGISTRER THÉ</button>
            </section>                
        </form>        
    );
}

export default AddProduct;