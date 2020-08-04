import React, { Fragment, useState } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import Modal from './Modal';

const AnimalCard = (props) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <Fragment>
            <a onClick={toggleModal}>
                <div className="card">
                    <Image cloudName="blackneasy" publicId={props.image} alt="profile">
                        <Transformation crop="scale" heigth="300" />
                    </Image>
                    <div className="body">
                        <h2>{props.name}</h2><span className="other">{props.other ? `( ${props.other} )` : ""}</span>
                        <p>{props.breed}</p>
                    </div>
                </div>
            </a>
            {showModal ?
                <Modal showModal={toggleModal} image={<Image cloudName="blackneasy" publicId={props.image}></Image>} ></Modal>
                : ""}

        </Fragment>
    )
}

export default AnimalCard;
