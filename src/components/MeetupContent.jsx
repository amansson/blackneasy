import React, { useState, Fragment } from 'react';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import Modal from '../components/Modal';
import FetchData from './FetchData';

const MeetupContent = (props) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const imageData = FetchData(`https://res.cloudinary.com/blackneasy/image/list/${props.meetup}.json`, {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <Fragment>
            {imageData.response.resources.map(image => {
                return (
                    <Fragment>
                        <div className="card" onClick={toggleModal}>
                            <Image cloudName="blackneasy" publicId={image.public_id}>
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
                                <Modal showModal={toggleModal} image={<Image cloudName="blackneasy" publicId={image.public_id}></Image>} />
                                : ""
                        }
                    </Fragment>
                )
            })}
        </Fragment>
    )
}

export default MeetupContent;
