import React, { Fragment, useState } from 'react';
import FetchData from '../components/FetchData';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import { FaWindowClose } from 'react-icons/fa';

const Certificate = () => {


    const [modalState, setModalState] = useState(false);

    const toggleModal = () => {
        setModalState(!modalState);
    };

    const imageData = FetchData('https://res.cloudinary.com/blackneasy/image/list/mh.json', {});
    if (!imageData.response) {
        return <div className="loading">Loading...</div>
    }

    return (
        <Fragment>
            <h1>MH</h1>
            <div className={modalState ? "modalBackground modalShow" : "modalBackground"}>
                <div className="modalInner">
                    <button onClick={toggleModal} className="exitButton"><FaWindowClose /></button>
                    <img src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80" alt="" />
                    <h2>This our Image Caption</h2>
                </div>
            </div>
            <button onClick={toggleModal}>Open modal</button>
            <br />
            <br />
            <div className="cards-certificate">
                {
                    imageData.response.resources.map(image => {
                        return (
                            <div className="card" key={image.public_id}>
                                <Image cloudName="blackneasy" publicId={image.public_id}>
                                    <Transformation
                                        crop="scale"
                                        width="300"
                                        height="200"
                                        dpr="auto"
                                        responsive_placeholder="blank"
                                    />
                                </Image>
                                <div className="caption">{image.context.custom.caption}</div>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    )
}


export default Certificate;
