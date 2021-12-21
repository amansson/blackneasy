import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

const Christmas = () => {
    return (
        <Image cloudName="blackneasy" publicId="christmas" className={"center-image"}>
            <Transformation height="500" />
        </Image>
    )
}

export default Christmas;
