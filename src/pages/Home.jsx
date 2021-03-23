import React, { Fragment } from 'react';
import Breed from '../components/Breed';
import BreedPlan from '../components/BreedPlan';
import { FaHeart } from 'react-icons/fa';

const Landing = () => {
    return (
        <Fragment>
            <div className="banner">
                <div>
                    <p>Belgisk Vallhund / Tervuerens, Groendahl, Russkaya Tsvetnaya Bolonka</p>
                </div>
            </div>

            <div className="wrapper">
                <BreedPlan header={"Valpar väntas mellan Sp1 LD Startklass RLDN Thunderwolfs Dream Boy ❤ och Black'n Easys Leda ❤ och  Black'n Easys Jixie ❤"} header2={"Groenendael o Tervuerens Leveransklara till midsommar"} images={"breed_leda_jixie_dreamboy"} />
            </div>
        </Fragment>
    )
}

export default Landing;
