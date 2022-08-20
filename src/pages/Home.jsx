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
                    <p>Kontakt: Marie-Louise, 0706-170833, stadning@hotmail.com</p>
                </div>
            </div>
            <div className="wrapper">
                <Breed header={"Groenendael - Leda och Lioyd - Valpar födda 8 Juli - 6 veckor gamla"}
                    images={"puppies_leda_lioyd"}
                    imageMother={"profile/Leda_profile"}
                    imageFather={"profile/Lioyd_profile"}
                    nameMother={"Black'n Easy Leda"}
                    nameFather={"Ct Lioyd Av Nanqijala"}
                />
            </div>
            <div className="wrapper">
                <Breed header={"Tysk Kleinspetitz - valpar 10 April (3 hanar och 1 tik, alla svarta) "}
                    images={"puppies_brownie_fellboms"}
                    imageMother={"profile/Brownie_profile"}
                    imageFather={"profile/Fellboms_profile"}
                    nameMother={"Ellinghort's Golden EYE (Brownie)"}
                    nameFather={"Fellboms Czabo - SE50391/2016 C.I.B, SEUCH, DKUCH, NOUCH, Nordic Show Champion, NO V-21 "}
                />
            </div>
        </Fragment>
    )
}

export default Landing;

