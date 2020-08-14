import React, { Fragment } from 'react';
import AnimalContent from '../components/AnimalContent';

const Animal = () => {
    return (
        <Fragment>
        <div className="wrapper">
            <AnimalContent animal={"dog"} />
            <br />
            <br />
            <AnimalContent animal={"cat"} />
        </div>

        </Fragment>
    )
}

export default Animal;
