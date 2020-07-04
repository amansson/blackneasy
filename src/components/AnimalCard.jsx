import React from 'react';
import { Image } from 'cloudinary-react';

const AnimalCard = (props) => {
    return (
        <div class="card-profile">
            <Image cloudName="blackneasy" publicId={props.name} alt="Jixie" />
            <div className="body">
                <h2>{props.name}</h2>
                <p>Tervuerens</p>
            </div>
        </div>
    )
}

export default AnimalCard;
