import React, { Fragment } from 'react';
import Breed from '../components/Breed';
import BreedPlan from '../components/BreedPlan';
import { FaHeart } from 'react-icons/fa';

const Landing = () => {
    return (
        <Fragment>
            <div className="banner">
                <div>
                    <p>Leda och Jixie har fött valpar se nedan för mer information, Kontakt: Marie-Louise, 0706-170833, stadning@hotmail.com</p>
                </div>
            </div>

            <div className="wrapper">
                <Breed header={"Valpar födda 19 April 2021"} images={"puppies_leda_dreamboy"} imageMother={"profile/leda_profile"} imageFather={"profile/Dreamboy_profile"} nameMother={"Leda (SE44579/2017)"} nameFather={"Dream boy (SE38782/2017)"} />
                <Breed header={"Valpar födda 26 April 2021"} images={"puppies_jixie_dreamboy"} imageMother={"profile/jixie_profile"} imageFather={"profile/Dreamboy_profile"} nameMother={"Jixie (SE55765/2016)"} nameFather={"Dream boy (SE38782/2017)"} />
            </div>
        </Fragment>
    )
}

export default Landing;
