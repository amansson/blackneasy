import React, { Fragment } from 'react';
import BreedJixie from '../components/BreedJixie';

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
                <h1>Parning</h1>
                <BreedJixie />
            </div>
        </Fragment>
    )
}

export default Landing;
