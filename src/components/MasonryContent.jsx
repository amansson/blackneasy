import React, { useState, Fragment } from 'react';
import Modal from './Modal';

const MasonryContent = (props) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <Fragment>
            <a onClick={toggleModal}>
                <div className="child">
                    {props.content}
                </div>
            </a>
            {showModal ?
                <Modal showModal={toggleModal} image={props.content} ></Modal>
                : ""}
        </Fragment>
    )
}

export default MasonryContent;
