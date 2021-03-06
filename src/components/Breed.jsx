import React, { Fragment } from 'react';
import Masonry from './Masonry';
import FetchData from './FetchData';
import { Image, Transformation } from 'cloudinary-react';
import { FaHeart } from 'react-icons/fa';

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
            </div>
            <div className="breed">
                <div></div>
                <div className="breed-couple">
                    <div class="couple">
                        <Image cloudName="blackneasy" publicId={props.imageMother} >
        
                        </Image>


                        <div class="couple-infos">
                            <h2>{props.nameMother}</h2>
                            <p>Mamma</p>
                        </div>
                    </div>
                    <div className="bg">
                        <div class="avatar-bordered">
                            <div className="heart"><FaHeart /></div>
                        </div>
                    </div>
                    <div class="couple">
                        <Image cloudName="blackneasy" publicId={props.imageFather}>
                            <Transformation
                                crop="scale"
                                gravity="faces"
                            />
                        </Image>
                        <div class="couple-infos">
                            <h2>{props.nameFather}</h2>
                            <p>Pappa</p>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
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
