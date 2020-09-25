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
                <Breed header={"Parade"} images={""} imageMother={"profile/cinderella_profile"} imageFather={"profile/Leo_profile"} nameMother={"Cindy"} nameFather={"Leo"} />
                <Breed header={"Parades 21 Juni 2020"} images={"breed_leda_proffen"} imageMother={"profile/leda_profile"} imageFather={"profile/proffen_profile"} nameMother={"Leda"} nameFather={"Proffen"} />
                <Breed header={"Parades 21 Juni 2020"} images={"breed_jixie_proffen"} imageMother={"profile/jixie_profile"} imageFather={"profile/proffen_profile"} nameMother={"Jixie"} nameFather={"Proffen"} />
            </div>
        </Fragment>
    )
}

export default Landing;
