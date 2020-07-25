import React, { useState, Fragment } from 'react';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import Modal from '../components/Modal';

const MeetupContent = (props) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <Fragment>
            <a onClick={toggleModal}>
                <div className="image-meetup">
                    <Image cloudName="blackneasy" publicId={props.image_id}>
                        <Transformation
                            crop="fill"
                            gravity="faces"
                            width="300"
                            height="200"
                            dpr="auto"
                            responsive_placeholder="blank"
                        />
                    </Image>
                </div>
            </a>
            {showModal ?
                <Modal showModal={toggleModal} image={<Image cloudName="blackneasy" publicId={props.image_id}></Image>} />
                : ""}
        </Fragment>

    )
}

export default MeetupContent;
