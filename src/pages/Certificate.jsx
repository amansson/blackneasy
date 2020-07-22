import React, { Fragment, useState } from 'react';
import FetchData from '../components/FetchData';
import Mh from '../components/Mh';

const Certificate = () => {
    const imageData = FetchData('https://res.cloudinary.com/blackneasy/image/list/mh.json', {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    console.log(imageData);

    return (
        <div className="wrapper">
            <h1>MH</h1>
            <div className="cards-certificate">
                {
                    imageData.response.resources.map(image => {
                        return (
                            <Mh key={image.public_id} image_id={image.public_id} caption={image.context.custom.caption} />
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Certificate;
