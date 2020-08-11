import React, { Fragment } from 'react';
import Breed from '../components/Breed';

const Landing = () => {
    return (
        <Fragment>
            <div className="banner">
                <div className="container">
                    <h1>Black and Easy</h1>
                    <p>Belgisk Vallhund / Tervuerens, Groendahl</p>
                </div>
            </div>

            <div className="wrapper">
                <Breed header={"Parades 21 Juni 2020"} images={"breed_leda_proffen"} imageMother={"profile/leda_profile"} imageFather={"profile/proffen_profile"} nameMother={"Leda"} nameFather={"Proffen"} />
                <Breed header={"Parades 21 Juni 2020"} images={"breed_jixie_proffen"} imageMother={"profile/jixie_profile"} imageFather={"profile/proffen_profile"} nameMother={"Jixie"} nameFather={"Proffen"} />
            </div>
        </Fragment>
    )
}

export default Landing;
