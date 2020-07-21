import React from 'react';
import Masonry from '../components/Masonry';
import FetchData from '../components/FetchData';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';

const Gallery = () => {
    const imageData = FetchData('https://res.cloudinary.com/blackneasy/image/list/puppy.json', {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <div>
            <Masonry columns={3} gap={25}>
            {
                imageData.response.resources.map(image => {
                    return (
                        
                            <Image width="200px" cloudName="blackneasy" publicId={image.public_id} />
                        
                    )
                })
            }
            </Masonry>
        </div>
    )
}

export default Gallery;
