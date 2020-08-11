import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

const PuppiesSelect = (props) => {
    return (
        <div className="puppies-select" onClick={props.toggle}>

            <Image cloudName="blackneasy" publicId={props.imageMother} >
                <Transformation crop="fill" gravity="faces" width="300" height="200" />
            </Image>

            <Image cloudName="blackneasy" publicId={props.imageFather}>
                <Transformation crop="fill" gravity="faces" width="300" height="200" />
            </Image>

            <div className="infos">
                <h2>{props.nameMother}</h2>
                <p>Mamma</p>
            </div>

            <div className="infos">
                <h2>{props.nameFather}</h2>
                <p>Pappa</p>
            </div>
        </div>
    )
}

export default PuppiesSelect;
