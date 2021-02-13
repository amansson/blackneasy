import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

const Christmas = () => {
    return (
        <Image cloudName="blackneasy" publicId="christmas" className="center">
            <Transformation height="500" crop="fill" />
        </Image>
    )
}

export default Christmas;
