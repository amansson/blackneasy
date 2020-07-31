import React, { useState, Fragment } from 'react';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import Modal from '../components/Modal';

const MeetupContentExtend = (props) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <Fragment>
            <div className="card" onClick={toggleModal}>
                <Image cloudName="blackneasy" publicId={props.image}>
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
            {
                showModal ?
                    <Modal showModal={toggleModal} image={<Image cloudName="blackneasy" publicId={props.image}></Image>} />
                    : ""
            }
        </Fragment>        
    )
}

export default MeetupContentExtend;

