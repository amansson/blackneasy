import React from 'react';
import AnimalContent from '../components/AnimalContent';
import FetchData from '../components/FetchData';

const Animal = () => {
    const imageData = FetchData('https://res.cloudinary.com/blackneasy/image/list/animal.json', {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    console.log(imageData.response.resources);

    return (
        <div className="wrapper cards-animal">
            {
                imageData.response.resources.map(image => {
                    return (
                        <AnimalContent key={image.public_id} image={image.public_id} name={image.context.custom.caption} breed={image.context.custom.breed} other={image.context.custom.other} />
                    )
                })
            }
        </div>
    )
}

export default Animal;
