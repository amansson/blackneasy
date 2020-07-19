import React, { Fragment } from 'react';
import FetchData from '../components/FetchData';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';

const Certificate = () => {

    const imageData = FetchData('https://res.cloudinary.com/blackneasy/image/list/mh.json', {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <Fragment>
            <h1>MH</h1>
            <div className="cards-certificate">
                {
                    imageData.response.resources.map(image => {
                        return (
                            <div className="card" key={image.public_id}>
                                <Image cloudName="blackneasy" width="400" height="300" crop="thumb" alt={image.public_id + "_mh"} publicId={image.public_id} />
                                <div className="caption">{image.context.custom.caption}</div>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    )
}


export default Certificate;
