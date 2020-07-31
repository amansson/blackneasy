import React, { useState, Fragment } from 'react';
import FetchData from './FetchData';
import MeetupContentExtend from './MeetupContentExtend';

const MeetupContent = (props) => {
    const imageData = FetchData(`https://res.cloudinary.com/blackneasy/image/list/${props.meetup}.json`, {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <Fragment>
            {imageData.response.resources.map(image => {
                return (
                    <MeetupContentExtend key={image.public_id} image={image.public_id} />
                )
            })}
        </Fragment>
    )
}

export default MeetupContent;
