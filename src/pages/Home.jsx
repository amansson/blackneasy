import React, { Fragment } from 'react';
import Breed from '../components/Breed';
import BreedPlan from '../components/BreedPlan';
import { FaHeart } from 'react-icons/fa';
import Christmas from '../components/Christmas';

const Landing = () => {
    return (
        <Fragment>
            <div className="banner">
                <div>
                    <p>Tassa har fött valpar se nedan för mer information, Kontakt: Marie-Louise, 0706-170833, stadning@hotmail.com</p>
                </div>
            </div>

            <div className="wrapper">
                <Breed header={"Valpar - Russkaya Tsvetnasa Bolonka - Tassa födde 2 valpar (2 tikar) - 17 December 2021"}
                    images={"puppies_tassa_shiro"}
                    imageMother={"breed/Tassa_breed"}
                    imageFather={"breed/Shiro_breed"}
                    nameMother={"Black'n Easy Tittolina (Tassa) - AS10974/2020"}
                    nameFather={"Shiro Sho Khazar - SE15096/2021"}
                />
            </div>
        </Fragment>
    )
}

export default Landing;
