import React from 'react';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import FetchData from './FetchData';

const Cloudinary = () => {

    const imageData = FetchData('https://res.cloudinary.com/blackneasy/image/list/profile.json', {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }


    console.log(imageData.response.resources);
    return (
        <div>
            <h1>One image</h1>
            <Image cloudName="blackneasy" publicId="Jixie" width="600" crop="scale" alt="Jixie" />

            <h1>Galleria</h1>
            {
                imageData.response.resources.map(image => {
                    return (
                        <div key={image.public_id}>
                            <Image cloudName="blackneasy" publicId={image.public_id} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cloudinary;
