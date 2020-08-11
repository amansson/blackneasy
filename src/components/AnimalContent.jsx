import React, { Fragment, useState } from 'react';
import AnimalContentExtend from './AnimalContentExtend';
import FetchData from './FetchData';

const AnimalContent = (props) => {
    const imageData = FetchData(`https://res.cloudinary.com/blackneasy/image/list/${props.animal}.json`, {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <div className="cards-animal">
            {
                imageData.response.resources.map(image => {
                    return (
                        <AnimalContentExtend key={image.public_id} image={image.public_id} name={image.context.custom.caption} breed={image.context.custom.breed} other={image.context.custom.other} />
                    )
                })
            }
        </div>
    )
}

export default AnimalContent;
