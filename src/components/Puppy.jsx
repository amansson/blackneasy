import React, { Fragment, useState } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import Modal from '../components/Modal';

const Puppy = (props) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <Fragment>
            <a onClick={toggleModal}>
                <div className="image-puppy">
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
            </a>
            {showModal ?
                <Modal showModal={toggleModal} image={<Image cloudName="blackneasy" publicId={props.image}></Image>} caption={props.caption} />
                : ""}
        </Fragment>


    )
}


export default Puppy;
