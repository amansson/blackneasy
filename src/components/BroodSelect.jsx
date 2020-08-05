import React from 'react';
import { Image } from 'cloudinary-react';

const BroodSelect = (props) => {
    return (
        <div className="select" onClick={props.toggle}>
            <Image cloudName="blackneasy" publicId={props.image} alt={props.image} />
            <div className="body">
                <h2>{props.name}</h2>
                <p>{props.race}</p>
            </div>
        </div>
    )
}

export default BroodSelect;
