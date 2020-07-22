import React from 'react';
import Puppy from '../components/Puppy';
import FetchData from '../components/FetchData';

const Puppies = () => {

    const imageData = FetchData('https://res.cloudinary.com/blackneasy/image/list/puppy.json', {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <div className="wrapper cards-puppies">
            {
                imageData.response.resources.map(image => {
                    return (
                        <Puppy key={image.public_id} image_id={image.public_id} />
                    )
                })
            }
        </div>
    )
}

export default Puppies;
