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
                <Breed header={"RUSSKAJA TSVETSNAJA BOLONKA - Valpar 16/8 2022 (1 tik och 3 hanar)"}
                    header2={"Intresserad av en liten Bolonka valp? Leveransklara mitten av oktober"}
                    images={"puppies_tassa_khazar"}
                    imageMother={"profile/Tassa_profile"}
                    imageFather={"profile/Khazar_profile"}
                    nameMother={"Black'n Easys Tassa"}
                    nameFather={"Khazar Shiro Sho"}
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

