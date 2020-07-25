import React, { Fragment, useState } from 'react';
import MeetupContent from './MeetupContent';
import FetchData from './FetchData';

const Meetup = (props) => {
    const [show, setShow] = useState(false);

    const toggleContent = () => {
        setShow(!show);
        props.toggleAll();
    }

    const imageData = FetchData(`https://res.cloudinary.com/blackneasy/image/list/${props.meetup}.json`, {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <Fragment>
            {show ? <a href="#" onClick={toggleContent}>Back</a> : ""}            
            {show ?
                <div className="cards-meetup">
                {imageData.response.resources.map(image => {                   
                    return (
                    <MeetupContent key={image.public_id} image_id={image.public_id} />
                    )
                })}
                </div>

                :
                <div className="card">
                    <a href="#" onClick={toggleContent}>
                        <img src={props.image} />
                        <p className="caption">{props.caption}</p>
                    </a>
                </div>
            }
        </Fragment>
    )
}

export default Meetup;
