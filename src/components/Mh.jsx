import React, { Fragment, useState } from 'react';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import Modal from '../components/Modal';

const Mh = (props) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <Fragment>
            <a onClick={toggleModal}>
                <div className="card">
                <Image cloudName="blackneasy" publicId={props.image_id}>
                    <Transformation
                        crop="scale"
                        width="300"
                        height="200"
                        dpr="auto"
                        responsive_placeholder="blank"
                    />
                </Image>
                <div className="caption">{props.caption}</div>
                </div>
            </a>
            {showModal ?
                <Modal showModal={toggleModal} image={<Image cloudName="blackneasy" publicId={props.image_id}></Image>} caption={props.caption} />
                : ""}
        </Fragment>


    )
}


export default Mh;
