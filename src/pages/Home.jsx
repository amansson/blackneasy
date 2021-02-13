import React, { Fragment } from 'react';
import Breed from '../components/Breed';
import BreedPlan from '../components/BreedPlan';

const Landing = () => {
    return (
        <Fragment>
            <div className="banner">
                <div>
                    <p>Belgisk Vallhund / Tervuerens, Groendahl, Russkaya Tsvetnaya Bolonka</p>
                </div>
            </div>

            <div className="wrapper">
                <BreedPlan header={"Groenendael och Tervuerens"} header2={"Planerad parning, valpar Vår/Sommar"} images={"puppies_shantis_zkrutt"} />
            </div>
        </Fragment>
    )
}

export default Landing;
