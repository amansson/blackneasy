import React, { Fragment } from 'react';
import Puppy from '../components/Puppy';
import FetchData from '../components/FetchData';
import PuppiesSelect from '../components/PuppiesSelect';

const Puppies = () => {

    const imageData = FetchData('https://res.cloudinary.com/blackneasy/image/list/puppy.json', {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <Fragment>
            <div className="wrapper">
                <h2 className="notice-action">Klicka på Mamma - Pappa för att se deras valparna</h2>
                <div className="card-puppies">
                   <PuppiesSelect imageMother={"Easy"} imageFather={"Jixie"} nameMother={"Easy"} nameFather={"Jixie"} /> 
                   <PuppiesSelect imageMother={"Easy"} imageFather={"Jixie"} nameMother={"Easy"} nameFather={"Jixie"} /> 
                   <PuppiesSelect imageMother={"Easy"} imageFather={"Jixie"} nameMother={"Easy"} nameFather={"Jixie"} /> 
                   <PuppiesSelect imageMother={"Easy"} imageFather={"Jixie"} nameMother={"Easy"} nameFather={"Jixie"} /> 
                </div>
            </div>
            
            <div className="wrapper puppies-images">
                {
                    imageData.response.resources.map(image => {
                        return (
                            <Puppy key={image.public_id} image_id={image.public_id} />
                        )
                    })
                }
            </div>

        </Fragment>
    )
}

export default Puppies;
