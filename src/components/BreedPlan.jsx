import React, { Fragment } from 'react';
import Masonry from './Masonry';
import FetchData from './FetchData';
import { Image, Transformation } from 'cloudinary-react';

const BreedJixie = (props) => {
    let imageData = "";
    if (props.images != "") {
        imageData = FetchData(`https://res.cloudinary.com/blackneasy/image/list/${props.images}.json`, {});
        if (!imageData.response) {
            return "";
        }
    }

    return (
        <Fragment>
            <div className="header">
                <h2>{props.header}</h2>
                <h3>{props.header2}</h3>
            </div>
            { props.images != "" ?
                <Masonry columns={3}>
                    {
                        imageData.response.resources.map(image => {
                            return (
                                <Image key={image.public_id} cloudName="blackneasy" publicId={image.public_id} />
                            )
                        })
                    }
                </Masonry>
            : ""}

            <br />
            <br />
            
        </Fragment>
    )
}

export default BreedJixie;
