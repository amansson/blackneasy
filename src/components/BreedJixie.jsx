import React from 'react';
import Masonry from './Masonry';
import FetchData from './FetchData';
import { Image } from 'cloudinary-react';

const BreedJixie = () => {
    const imageData = FetchData('https://res.cloudinary.com/blackneasy/image/list/mh.json', {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <div className="breed">
            <h2>Jixie och Proffen</h2>
            <div className="desc">
                <h3>Parades 21 Juni 2020</h3>
            </div>
            <Masonry columns={4}>
            {
                imageData.response.resources.map(image => {
                    return (
                        <Image key={image.public_id} cloudName="blackneasy" publicId={image.public_id} />
                    )
                })
            }
            </Masonry>
        </div>
    )
}

export default BreedJixie;
