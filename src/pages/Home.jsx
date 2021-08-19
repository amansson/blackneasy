import React, { Fragment } from 'react';
import Breed from '../components/Breed';
import BreedPlan from '../components/BreedPlan';
import { FaHeart } from 'react-icons/fa';

const Landing = () => {
    return (
        <Fragment>
            <div className="banner">
                <div>
                    <p>Cindy har fött valpar se nedan för mer information, Kontakt: Marie-Louise, 0706-170833, stadning@hotmail.com</p>
                </div>
            </div>

            <div className="wrapper">
                <Breed header={"Valpar - Russkaya Tsvetnasa Bolonka - Cindy födde 3 valpar (1 tik och 2 hanar) - 3 Augusti 2021"} images={"puppies_cindy_linus"} imageMother={"breed/Cinderella_breed"} imageFather={"breed/Linus"} nameMother={"Black'n Easy Cinderella - AS59730/2017"} nameFather={"Mellvins Milarious Buggati (Linus) - AS43295/2019"} />                
            </div>
        </Fragment>
    )
}

export default Landing;
