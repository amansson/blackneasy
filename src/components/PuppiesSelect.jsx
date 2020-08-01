import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { FaHeart } from 'react-icons/fa';

const PuppiesSelect = (props) => {
    return (
        <div className="puppies-select" onClick={props.toggle}>
            <div class="select">
                <Image cloudName="blackneasy" publicId={props.imageMother}>
                    <Transformation
                        crop="scale"
                        gravity="faces"
                    />
                </Image>
                <div class="select-infos">
                    <h2>{props.nameMother}</h2>
                    <p>Mamma</p>
                </div>
            </div>
            <div className="bg">
                <div class="avatar-bordered">
                    <div className="heart"><FaHeart /></div>
                </div>
            </div>
            <div class="select">
                <Image cloudName="blackneasy" publicId={props.imageFather}>
                    <Transformation
                        crop="scale"
                        gravity="faces"
                    />
                </Image>
                <div class="select-infos">
                    <h2>{props.nameFather}</h2>
                    <p>Pappa</p>
                </div>
            </div>
        </div>
    )
}

export default PuppiesSelect;
