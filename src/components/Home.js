import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Home = (props) => {
    return (
        <div className="flex flex-col items-center py-20 gap-12">
            <header className="flex flex-col gap-6 items-center">
                <picture>
                    <img src="/assets/logo/teabox_icon_LG.png" alt="teacup"/>
                </picture>
                
                <h1 className="text-5xl md:text-7xl font-bold coral tracking-wide">{props.title}</h1>
            </header>

            <div className="flex flex-col gap-3 items-center max-w-prose text-center items-center">
                <h2>{props.subtitle}</h2>
                <h2 className="font-bold text-xl coral">{props.bold_phrase}</h2>
            </div>
            <button className="cust_button"><Link to="/macollection" data-link aria-current="page">accéder à ma collection de thé</Link></button>        
        </div>
    );
}

Home.defaultProps = {
    title: 'Bienvenu.e',
    subtitle: 'Teabox est l\'application incontournable pour les amateurs de thé, vous permettant de créer et de cataloguer votre parcours thé avec facilité. Que vous veniez de découvrir un mélange délicieux ou que vous planifiez votre prochaine aventure thé, Teabox vous permet d\'ajouter facilement les thés que vous avez dégustés ou ceux que vous avez hâte d\'essayer. Avec la possibilité de noter chaque thé en fonction de votre goût personnel et de votre expérience, Teabox vous aide à suivre vos préférences et à découvrir de nouveaux favoris en chemin.',
    bold_phrase:'Rehaussez votre expérience de dégustation de thé avec Teabox, où chaque gorgée raconte une histoire.'
};

Home.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default Home;