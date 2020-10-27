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
            </div>
        </Fragment>
    )
}

export default Landing;
