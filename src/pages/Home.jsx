import React, { Fragment } from 'react';
import Breed from '../components/Breed';

const Landing = () => {
    return (
        <Fragment>
            <div className="banner">
                <div className="container">
                    <h1>Black n easy <strong>Valpar i alla dess former</strong></h1>
                    <p>Tervuerens, Groendahl</p>
                </div>
            </div>

            <div className="wrapper">
                <Breed header={"Parades 21 Juni 2020"} images={"jixie_proffen"} imageMother={"profile/jixie_profile"} imageFather={"profile/proffen_profile"} nameMother={"Jixie"} nameFather={"Proffen"} />
            </div>
        </Fragment>
    )
}

export default Landing;
