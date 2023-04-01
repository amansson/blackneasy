import React, { Fragment } from 'react';
import Breed from '../components/Breed';
import BreedPlan from '../components/BreedPlan';
import { FaHeart } from 'react-icons/fa';
import Christmas from '../components/Christmas';
import Masonry from '../components/Masonry';

const Landing = () => {
    const imageData = FetchData('https://res.cloudinary.com/blackneasy/image/list/home.json', {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <Fragment>
            <div className="banner">
                <div>
                    <p>Kontakt: Marie-Louise, 0706-170833, stadning@hotmail.com</p>
                </div>
            </div>
            <div className="wrapper">                
                <Masonry columns={4}>
                {
                    imageData.response.resources.map(image => {
                        return (
                            <Image key={image.public_id} cloudName="blackneasy" publicId={image.public_id} />
                        )
                    })
                }
                </Masonry>
            </div>
        </Fragment>
    )
}

export default Landing;

