import React, { Fragment } from 'react';
import Breed from '../components/Breed';

const Landing = () => {
    return (
        <Fragment>
            <div className="banner">
                <div>
                    <p>Belgisk Vallhund / Tervuerens, Groendahl, Russkaya Tsvetnaya Bolonka</p>
                </div>
            </div>

            <div className="wrapper">
                <Breed header={"Parade - Russkaya Tsvetnasa Bolonka - Väntar valpar vecka 40 2020"} images={""} imageMother={"breed/Cinderella_breed"} imageFather={"breed/FeyerVerk_breed2"} nameMother={"Black'n Easy - Cinderella"} nameFather={"Russkaya Roskosh - Feyer Verk"} />
                <Breed header={"Parades 21 Juni 2020"} images={"breed_leda_proffen"} imageMother={"profile/leda_profile"} imageFather={"profile/proffen_profile"} nameMother={"Leda"} nameFather={"Proffen"} />
            </div>
        </Fragment>
    )
}

export default Landing;
