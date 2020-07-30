import React, { Fragment } from 'react';
import { Image } from 'cloudinary-react';
import FetchData from '../components/FetchData';

const BroodContent = (props) => {

    const imageData = FetchData(`https://res.cloudinary.com/blackneasy/image/list/${props.images}.json`, {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <Fragment>
            <h2 className="text-align-center">{props.brood}</h2>
            <div className="date text-align-center">{props.date}</div>
            <div className="cards-test">

                {imageData.response.resources.map(image => {
                    return (
                        <div className="card" key={image.public_id}>
                            <Image cloudName="blackneasy" publicId={image.public_id} alt="puppy" />
                            <div class="info">
                                <span class="gender">{image.context.custom.gender}</span>
                                <h3>{image.context.custom.caption}</h3>
                                <span class="location">{image.context.custom.location}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default BroodContent;
