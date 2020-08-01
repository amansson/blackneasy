import React, { Fragment } from 'react';
import Puppy from '../components/Puppy';
import FetchData from '../components/FetchData';

const PuppiesContent = (props) => {
    const imageData = FetchData(`https://res.cloudinary.com/blackneasy/image/list/${props.puppies}.json`, {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <Fragment>
        {
            imageData.response.resources.map(image => {
                return (
                    <Puppy key={image.public_id} image={image.public_id} />
                )
            })
        }
        </Fragment>
    )
}

export default PuppiesContent;
